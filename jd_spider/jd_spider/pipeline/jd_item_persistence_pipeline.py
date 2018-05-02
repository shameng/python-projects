# coding: UTF-8

""" 

@author: xindemeng
@time: 2018/4/11 17:55 
"""
import pymongo

from jd_spider.item.item_info import ItemInfo


class JDBaseItemPersistencePipeline(object):

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
            # 补全 URL
            item['item_url'] = "https:" + item['item_url']
            item['item_pic_url'] = "https:" + item['item_pic_url']

            id = self._process_item_info(item)
            print(id)
            item["id"] = id

        return item

    def _process_item_info(self, item):
        return self.db.item_info.insert(dict(item))
