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

    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get("MONGO_URI"),
            mongo_db=crawler.settings.get("MONGO_DATABASE", "jd"),
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        if isinstance(item, ItemComment):
            comments = item.get("comments")
            self.save_comment_contents(comments)

        return item

    def save_comment_contents(self, comments):
        if not comments or len(comments) == 0:
            return None
        comment_contents = []
        if isinstance(comments, list):
            for comment in comments:
                if isinstance(comment, ItemCommentContent):
                    comment_contents.append(dict(comment))

        if len(comment_contents) > 0:
            return self.db.item_comment_content.insert(comment_contents)
        else:
            return None
