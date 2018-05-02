# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""

import pymongo
import redis

from jd_spider.item.item_comment_content import ItemCommentContent
from jd_spider.item.item_comment import ItemComment


class JDItemCommentPipeline(object):

    def __init__(self, mongo_uri, mongo_db, redis_host, redis_port, item_comment_id_key):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db
        self.redis_host = redis_host
        self.redis_port = redis_port
        self.item_comment_id_key = item_comment_id_key

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get("MONGO_URI"),
            mongo_db=crawler.settings.get("MONGO_DATABASE", "jd"),
            redis_host=crawler.settings.get("REDIS_HOST"),
            redis_port=crawler.settings.get("REDIS_PORT"),
            item_comment_id_key=crawler.settings.get("REDIS_KEY_ITEM_COMMENT_ID_KEY")
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]
        self.pool = redis.ConnectionPool(host=self.redis_host, port=self.redis_port)

    def close_spider(self, spider):
        self.client.close()
        self.pool.disconnect()

    def process_item(self, item, spider):
        if isinstance(item, ItemComment):
            comments = item.get("comments")
            ids = self.save_comment_contents(comments)
            print(ids)

            id = self.save_comment(item)
            item["id"] = id
            print(id)

        return item

    def save_comment_contents(self, comments):
        if not comments or len(comments) == 0:
            return None
        comment_contents = []
        if isinstance(comments, list):
            r = redis.Redis(connection_pool=self.pool)
            for comment in comments:
                if isinstance(comment, ItemCommentContent):
                    # 去重
                    if r.sadd(self.item_comment_id_key, comment["jd_comment_id"]) > 0:
                        comment_contents.append(dict(comment))

        if len(comment_contents) > 0:
            return self.db.item_comment_content.insert(comment_contents)
        else:
            return None

    def save_comment(self, comment):
        comm = self.db.item_comment.find({"sku_id": comment["sku_id"]})
        if not comm or comm.count() == 0:
            comment_dict = dict(comment)
            comment_dict.pop("comments")
            return self.db.item_comment.insert(comment_dict)
        else:
            return comm[0]["sku_id"]