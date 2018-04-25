# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
import scrapy


class ItemCommentContentItem(scrapy.Item):


    id = scrapy.Field()
    # 京东的评论id
    jd_comment_id = scrapy.Field()
    sku_id = scrapy.Field()
    create_time = scrapy.Field()
    content = scrapy.Field()
    score = scrapy.Field()
    image_count = scrapy.Field()
    is_mobile = scrapy.Field()
    # 用户等级称号
    user_level_name = scrapy.Field()
    # 点赞数
    useful_vote_count = scrapy.Field()
    # 回复数
    reply_count = scrapy.Field()
