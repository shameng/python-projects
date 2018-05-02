# coding: UTF-8

""" 

@author: xindemeng
@time: 2018/4/12 23:06 
"""

import redis

from jd_spider.item.item_info import ItemInfo

class JDItemUrlPipeline(object):

    def __init__(self, redis_host, redis_port, item_url_key):
        self.redis_host = redis_host
        self.redis_port = redis_port
        self.item_url_key = item_url_key

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            redis_host=crawler.settings.get("REDIS_HOST"),
            redis_port=crawler.settings.get("REDIS_PORT"),
            item_url_key=crawler.settings.get("REDIS_KEY_ITEM_URL")
        )

    def open_spider(self, spider):
        self.pool = redis.ConnectionPool(host=self.redis_host, port=self.redis_port)

    def close_spider(self, spider):
        self.pool.disconnect()

    def process_item(self, item, spider):
        if isinstance(item, ItemInfo):
            self.cache_item_url(item)
        return item

    def cache_item_url(self, item):
        r = redis.Redis(connection_pool=self.pool)
        count = r.rpush(self.item_url_key, item['item_url'])
        print(count)
