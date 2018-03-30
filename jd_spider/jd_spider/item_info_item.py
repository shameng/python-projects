# coding: UTF-8

""" 

@author: xindemeng
@time: 2018/3/30 21:59 
"""
import scrapy


class ItemInfoItem(scrapy.Item):

    id = scrapy.Field()

    data_sku = scrapy.Field()

    item_name = scrapy.Field()

    item_url = scrapy.Field()

    item_pic_url = scrapy.Field()

    item_price = scrapy.Field()

    item_comment_count = scrapy.Field()