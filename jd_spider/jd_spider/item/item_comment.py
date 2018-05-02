# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""

import scrapy


class ItemComment(scrapy.Item):


    id = scrapy.Field()
    sku_id = scrapy.Field()
    score1_count = scrapy.Field()
    score2_count = scrapy.Field()
    score3_count = scrapy.Field()
    score4_count = scrapy.Field()
    score5_count = scrapy.Field()
    default_good_count = scrapy.Field()
    comment_count = scrapy.Field()
    average_score = scrapy.Field()
    image_list_count = scrapy.Field()

    # 好评
    good_count = scrapy.Field()
    good_rate = scrapy.Field()
    good_rate_show = scrapy.Field()

    # 中评
    general_count = scrapy.Field()
    general_rate = scrapy.Field()
    general_rate_show = scrapy.Field()
    good_rate_show = scrapy.Field()

    # 差评
    poor_count = scrapy.Field()
    poor_rate = scrapy.Field()
    poor_rate_show = scrapy.Field()

    # 追评
    after_count = scrapy.Field()

    # 评论
    comments = scrapy.Field()