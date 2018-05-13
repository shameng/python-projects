# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
import scrapy
import redis
import pymongo

import json
import logging

from jd_spider.item.item_comment_content import ItemCommentContent
from jd_spider.item.item_comment import ItemComment
from jd_spider.settings import REDIS_KEY_COMMENT_CONTENT_URL

logger = logging.getLogger(__name__)


class JDItemCommentSpider(scrapy.Spider):

    # 自定义配置
    custom_settings = {
        'ITEM_PIPELINES': {
            'jd_spider.pipeline.jd_item_comment_pipeline.JDItemCommentPipeline': 200,
        }
    }

    # 爬虫的名称
    name = "jd_item_comment_spider"

    # 允许的域名
    allowed_domains = ["jd.com"]

    # comment_url_pattern = "https://club.jd.com/comment/getProductPageFoldComments.action?productId=%s&score=0&sortType=5&page=%s&pageSize=10&_=%s"
    comment_url_pattern = "https://sclub.jd.com/comment/productPageComments.action?productId=%s&score=0&sortType=5&page=%s&pageSize=10&isShadowSku=0&rid=0&fold=1"

    def __init__(self, redis_host, redis_port, item_comment_sku_key, mongo_uri, mongo_db):
        self.item_comment_sku_key = item_comment_sku_key
        self.pool = redis.ConnectionPool(host=redis_host, port=redis_port)
        self.db = pymongo.MongoClient(mongo_uri)[mongo_db]

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get("MONGO_URI"),
            mongo_db=crawler.settings.get("MONGO_DATABASE", "jd"),
            redis_host=crawler.settings.get("REDIS_HOST"),
            redis_port=crawler.settings.get("REDIS_PORT"),
            item_comment_sku_key=crawler.settings.get("REDIS_KEY_ITEM_COMMENT_SKU")
        )

    def start_requests(self):
        """
        重写该方法，从redis上获取url
        :return:
        """
        comment_url = self.get_comment_url()
        if comment_url is None:
            print("Redis的%s已经消费完毕" % self.item_comment_sku_key)
        else:
            yield self.make_requests_from_url(comment_url)

    def parse(self, response):
        if "change_url" in response.request.meta.keys():
            # 调用下一个请求
            item_url = self.get_comment_url()
            if item_url is None:
                print("Redis的%s已经消费完毕" % self.item_comment_sku_key)
                return
            else:
                yield scrapy.Request(item_url, callback=self.parse)
        else:
            try:
                comment_info = json.loads(response.body_as_unicode())

                item_comment = ItemComment()
                item_comment["image_list_count"] = comment_info.get("imageListCount")

                product_comment_summary = comment_info.get("productCommentSummary")
                sku_id = product_comment_summary.get("skuId")

                item_comment["sku_id"] = sku_id
                item_comment["score1_count"] = product_comment_summary.get("score1Count")
                item_comment["score2_count"] = product_comment_summary.get("score2Count")
                item_comment["score3_count"] = product_comment_summary.get("score3Count")
                item_comment["score4_count"] = product_comment_summary.get("score4Count")
                item_comment["score5_count"] = product_comment_summary.get("score5Count")
                item_comment["default_good_count"] = product_comment_summary.get("defaultGoodCount")
                item_comment["comment_count"] = product_comment_summary.get("commentCount")
                item_comment["average_score"] = product_comment_summary.get("averageScore")

                item_comment["good_count"] = product_comment_summary.get("goodCount")
                item_comment["good_rate"] = product_comment_summary.get("goodRate")
                item_comment["good_rate_show"] = product_comment_summary.get("goodRateShow")

                item_comment["general_count"] = product_comment_summary.get("generalCount")
                item_comment["general_rate"] = product_comment_summary.get("generalRate")
                item_comment["general_rate_show"] = product_comment_summary.get("generalRateShow")

                item_comment["poor_count"] = product_comment_summary.get("poorCount")
                item_comment["poor_rate"] = product_comment_summary.get("poorRate")
                item_comment["poor_rate_show"] = product_comment_summary.get("poorRateShow")

                item_comment["after_count"] = product_comment_summary.get("afterCount")

                comments = []
                for comment in comment_info.get("comments"):
                    comment_content = ItemCommentContent()
                    comment_content["sku_id"] = sku_id
                    comment_content["create_time"] = comment.get("creationTime")
                    comment_content["content"] = comment.get("content")
                    comment_content["score"] = comment.get("score")
                    comment_content["user_level_name"] = comment.get("userLevelName")
                    comment_content["is_mobile"] = comment.get("isMobile")
                    comment_content["useful_vote_count"] = comment.get("usefulVoteCount")
                    comment_content["jd_comment_id"] = comment.get("id")
                    comment_content["reply_count"] = comment.get("replyCount")
                    if ("imageCount" in comment):
                        comment_content["image_count"] = comment.get("imageCount")
                    else:
                        comment_content["image_count"] = 0

                    comments.append(comment_content)

                item_comment["comments"] = comments

                # 最大页码
                max_page = comment_info.get("maxPage")

                self.push_comment_url(sku_id, max_page)

                # 不同商品的评论URL
                comment_url = self.get_comment_url()
                if comment_url is None:
                    print("Redis的%s已经消费完毕" % self.item_comment_sku_key)
                    return
                else:
                    yield scrapy.Request(comment_url, callback=self.parse)

                yield item_comment
            except BaseException, e:
                logger.error("error when parse, msg: %s" % e.message)
                req = response.request
                req.meta["change_proxy"] = True
                yield req

    def get_comment_url(self):
        """
        拼接查询评论的url，注意除去全球购的sku
        :return:
        """
        r = redis.Redis(connection_pool=self.pool)
        while True:
            sku = r.lpop(self.item_comment_sku_key)
            print("sku: %s" % sku)
            if not sku:
                break

            item_info = self.db.item_info.find_one({"item_data_sku": sku})
            # 除去全球购的sku
            if item_info and item_info.get("item_name"):
                return self.comment_url_pattern % (sku, "1")

    def push_comment_url(self, sku, max_page):
        """
        把该sku的评论url全部push到redis
        :param sku:
        :param max_page:
        :return:
        """
        if max_page > 1:
            r = redis.Redis(connection_pool=self.pool)
            for page in range(2, max_page + 1):
                r.rpush(REDIS_KEY_COMMENT_CONTENT_URL, self.comment_url_pattern % (sku, page))
