# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
import pymongo

from jd_spider.item.item_info import ItemInfo


class JDItemPricePipeline(object):

    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get("MONGO_URI"),
            mongo_db=crawler.settings.get("MONGO_DATABASE", "jd")
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        if isinstance(item, ItemInfo):
            self.update_item_price(item)
        return item

    def update_item_price(self, item):
        return self.db.item_info.update({"item_data_sku": item["item_data_sku"]},
                                        {'$set': {"item_price": item["item_price"]}})
