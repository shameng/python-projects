# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
import json
import re

import scrapy
import redis

from jd_spider.item_info_item import ItemInfoItem


class JDItemSpider(scrapy.Spider):

    # 自定义配置
    custom_settings = {
        'ITEM_PIPELINES': {
            'jd_spider.jd_item_update_pipeline.JDItemUpdatePipeline': 200,
        }
    }

    # 爬虫的名称
    name = "jd_item_spider"

    # 允许的域名
    allowed_domains = ["jd.com"]

    # 正则表达式，用于获取url中的sku
    pattern = re.compile(r"\d+")

    def __init__(self, redis_host, redis_port, item_url_key):
        self.redis_host = redis_host
        self.redis_port = redis_port
        self.item_url_key = item_url_key
        self.pool = redis.ConnectionPool(host=self.redis_host, port=self.redis_port)

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            redis_host=crawler.settings.get("REDIS_HOST"),
            redis_port=crawler.settings.get("REDIS_PORT"),
            item_url_key=crawler.settings.get("REDIS_KEY_ITEM_URL")
        )

    def start_requests(self):
        """
        重写该方法，从redis上获取url
        :return:
        """
        item_url = self.get_item_url_from_redis()
        if item_url is None:
            print("Redis的%s已经消费完毕" % self.item_url_key)
        else:
            yield self.make_requests_from_url(item_url)

    def parse(self, response):
        infos = response.xpath("//ul[@class='parameter2 p-parameter-list']/li/text()").extract()

        info_dict = {}
        for info in infos:
            arr = info.split("：".decode(encoding="UTF-8"))
            info_dict[arr[0]] = arr[1]

        # info_json = json.dumps(info_dict)
        #
        # print("info: ", info_json)

        # 店铺评分
        store_score = response.xpath("//em[@class='evaluate-grade']//a/text()").extract()[0]
        # 店铺其他评分
        scores = response.xpath("//div[@class='score-detail']/em/text()").extract()
        store_items_score = scores[0]
        store_service_score = scores[1]
        store_logistics_score = scores[2]

        item_data_sku = self.pattern.search(response.url).group()

        item_info = ItemInfoItem()
        item_info["item_data_sku"] = item_data_sku
        item_info["item_info"] = info_dict
        item_info["store_score"] = store_score
        item_info["store_items_score"] = store_items_score
        item_info["store_service_score"] = store_service_score
        item_info["store_logistics_score"] = store_logistics_score

        # 调用下一个请求
        item_url = self.get_item_url_from_redis()
        if item_url is None:
            print("Redis的%s已经消费完毕" % self.item_url_key)
        else:
            yield scrapy.Request(item_url, callback=self.parse)

        yield item_info

    def get_item_url_from_redis(self):
        r = redis.Redis(connection_pool=self.pool)
        return r.lpop(self.item_url_key)
