# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
import scrapy
import redis

import re
import json

from jd_spider.item.item_comment_content import ItemCommentContent
from jd_spider.item.item_comment import ItemComment


class JDItemCommentSpider(scrapy.Spider):

    # 自定义配置
    custom_settings = {
        'ITEM_PIPELINES': {
            'jd_spider.pipeline.jd_item_persistence_pipeline.JDItemCommentPipeline': 200,
        }
    }

    # 爬虫的名称
    name = "jd_item_comment_spider"

    # 允许的域名
    allowed_domains = ["jd.com"]

    # 正则表达式，用于获取url中的sku
    pattern = re.compile(r"\d+")

    offset = 0

    # comment_url_pattern = "https://club.jd.com/comment/getProductPageFoldComments.action?productId=%s&score=0&sortType=5&page=%s&pageSize=10&_=%s"
    comment_url_pattern = "https://sclub.jd.com/comment/productPageComments.action?productId=%s&score=0&sortType=5&page=%s&pageSize=10&isShadowSku=0&rid=0&fold=1"

    def __init__(self, redis_host, redis_port, item_comment_sku_key):
        self.redis_host = redis_host
        self.redis_port = redis_port
        self.item_comment_sku_key = item_comment_sku_key
        self.pool = redis.ConnectionPool(host=self.redis_host, port=self.redis_port)

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
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
        print(response.body)

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

        self.offset = self.offset + 1
        # 调用下一个请求
        comment_url = None
        # 最大页码
        max_page = comment_info.get("maxPage")
        if self.offset < max_page:
            # 同一个商品的评论URL
            comment_url = self.get_comment_url_by_sku(sku_id)
        else:
            # 不同商品的评论URL
            self.offset = 0
            comment_url = self.get_comment_url()

        if comment_url is None:
            print("Redis的%s已经消费完毕" % self.item_comment_sku_key)
        else:
            yield scrapy.Request(comment_url, callback=self.parse)


        yield item_comment

    def get_comment_url(self):
        """
        拼接查询评论的url
        :return:
        """
        r = redis.Redis(connection_pool=self.pool)
        sku = r.lpop(self.item_comment_sku_key)
        print("sku: %s" % sku)

        return self.get_comment_url_by_sku(sku)

    def get_comment_url_by_sku(self, sku):
        """
        拼接查询评论的url
        :return:
        """
        if sku is None:
            return None

        return self.comment_url_pattern % (sku, self.offset)
