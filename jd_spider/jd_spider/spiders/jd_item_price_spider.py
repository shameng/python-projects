# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
import scrapy
import redis

import time
import json

from jd_spider.item_info_item import ItemInfoItem


class JDItemPriceSpider(scrapy.Spider):
    # 自定义配置
    custom_settings = {
        'ITEM_PIPELINES': {
            'jd_spider.jd_item_price_pipeline.JDItemPricePipeline': 200,
        }
    }

    # 爬虫的名称
    name = "jd_item_price_spider"

    # 允许的域名
    allowed_domains = ["3.cn"]

    offset = 0

    price_url_pattern = "https://p.3.cn/prices/mgets?type=1&area=1_72_4137_0&skuIds=%s&pdbp=0&pdtk=&pdpin=&pduid=15046225439801238611692&source=list_pc_front&_=%d"

    def __init__(self, redis_host, redis_port, item_sku_key):
        self.redis_host = redis_host
        self.redis_port = redis_port
        self.item_sku_key = item_sku_key
        self.pool = redis.ConnectionPool(host=self.redis_host, port=self.redis_port)

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            redis_host=crawler.settings.get("REDIS_HOST"),
            redis_port=crawler.settings.get("REDIS_PORT"),
            item_sku_key=crawler.settings.get("REDIS_KEY_ITEM_SKU")
        )

    def start_requests(self):
        """
        重写该方法，从redis上获取url
        :return:
        """
        price_url = self.get_price_url()
        if price_url is None:
            print("Redis的%s已经消费完毕" % self.item_sku_key)
        else:
            yield self.make_requests_from_url(price_url)

    def parse(self, response):
        price_infos = json.loads(response.body_as_unicode())
        for price_info in price_infos:
            data_sku = price_info["id"][2:]
            item_info = ItemInfoItem(item_price=price_info["p"], item_data_sku=data_sku)

            yield item_info

        self.offset = self.offset + 1

        # 调用下一个请求
        price_url = self.get_price_url()
        if price_url is None:
            print("Redis的%s已经消费完毕" % self.item_sku_key)
        else:
            yield scrapy.Request(price_url, callback=self.parse)

    def get_price_url(self):
        print("offset: %d" % self.offset)
        """
        拼接查询价格的url
        :return:
        """
        r = redis.Redis(connection_pool=self.pool)
        skus = r.lrange(self.item_sku_key, self.offset * 60, self.offset * 60 + 59)
        print(len(skus))
        if len(skus) == 0:
            return None

        skuIds = ""
        for sku in skus:
            skuIds += ("J_" + sku + ",")
        skuIds = skuIds[0:-1]
        print(skuIds)

        t = time.time()
        # 毫秒级时间戳
        timestamp = int(round(t * 1000))

        return self.price_url_pattern %(skuIds, timestamp)
