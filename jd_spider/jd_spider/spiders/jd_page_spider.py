# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
import scrapy
import redis

import logging

from jd_spider.item.item_info import ItemInfo

logger = logging.getLogger(__name__)


class JDPageSpider(scrapy.Spider):

    # 自定义配置
    custom_settings = {
        'ITEM_PIPELINES': {
            'jd_spider.pipeline.jd_item_persistence_pipeline.JDBaseItemPersistencePipeline': 200,
            'jd_spider.pipeline.jd_item_persistence_pipeline.JDItemUrlPipeline': 300,
        }
    }

    # 爬虫的名称
    name = "jd_page_spider"

    # 允许的域名
    allowed_domains = ["jd.com"]

    base_page_url = "https://list.jd.com/list.html?cat=1315,1343,9719"
    offset = 117

    def __init__(self, redis_host, redis_port, item_sku_key, item_sku_comment_key):
        self.redis_host = redis_host
        self.redis_port = redis_port
        self.item_sku_key = item_sku_key
        self.item_sku_comment_key = item_sku_comment_key
        self.pool = redis.ConnectionPool(host=self.redis_host, port=self.redis_port)

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            redis_host=crawler.settings.get("REDIS_HOST"),
            redis_port=crawler.settings.get("REDIS_PORT"),
            item_sku_key=crawler.settings.get("REDIS_KEY_ITEM_SKU"),
            item_sku_comment_key=crawler.settings.get("REDIS_KEY_ITEM_COMMENT_SKU"),
        )

    def start_requests(self):
        """
        重写该方法
        :return:
        """
        page_url = self.get_page_url()
        if page_url is None:
            print("页面已经全部爬取完毕")
        else:
            yield self.make_requests_from_url(page_url)

    def parse(self, response):
        try:
            items = response.xpath("//li[@class='gl-item']")

            for item in items:
                item_name = item.xpath(".//div[@class='p-name']//em/text()").extract()[0].strip()
                item_url = item.xpath(".//div[@class='p-name']/a/@href").extract()[0]
                pic_list = item.xpath(".//div[@class='p-img']//img/@src").extract()
                if len(pic_list) > 0:
                    item_pic_url = pic_list[0]
                else:
                    item_pic_url = item.xpath(".//div[@class='p-img']//img/@data-lazy-img").extract()[0]
                item_data_sku = item.xpath("./div/@data-sku").extract()[0]

                item_info = ItemInfo(item_name=item_name, item_url=item_url, item_pic_url=item_pic_url,
                                     item_data_sku=item_data_sku)

                # 缓存sku
                self.cache_item_sku(item_data_sku)

                yield item_info

            # 调用下一个请求
            self.offset = self.offset + 1
            page_url = self.get_page_url()
            if page_url is None:
                print("页面已经全部爬取完毕")
                return
            else:
                yield self.make_requests_from_url(page_url)
        except BaseException, e:
            logger.error("error when parse, msg: %s" % e.message)
            req = response.request
            req.meta["change_proxy"] = True
            yield req

    def cache_item_sku(self, item_sku):
        r = redis.Redis(connection_pool=self.pool)
        r.rpush(self.item_sku_key, item_sku)
        r.rpush(self.item_sku_comment_key, item_sku)

    def get_page_url(self):
        print("offset: %d" % self.offset)
        if self.offset == 1:
            return self.base_page_url
        elif self.offset == 2:
            return self.base_page_url + "&page=2&sort=sort_rank_asc&trans=1&JL=6_0_0&ms=6"
        elif self.offset > 0 and self.offset < 300:
            return self.base_page_url + "&page=%s&sort=sort_rank_asc&trans=1&JL=6_0_0" % self.offset
        else:
            return None
