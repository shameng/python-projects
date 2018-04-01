# coding: UTF-8

""" 

@author: xindemeng
@time: 2018/3/30 21:59 
"""
import scrapy


class ItemInfoItem(scrapy.Item):

    id = scrapy.Field()
    # 商品在列表页排名
    item_rank = scrapy.Field()
    # 商品id
    data_sku = scrapy.Field()

    item_name = scrapy.Field()

    item_url = scrapy.Field()

    item_pic_url = scrapy.Field()

    item_price = scrapy.Field()

    item_comment_count = scrapy.Field()
    # 商品详细描述
    item_info = scrapy.Field()

    # 店铺评分
    store_score = scrapy.Field()
    # 店铺商品评分
    store_items_score = scrapy.Field()
    # 店铺服务评分
    store_service_score = scrapy.Field()
    # 店铺物流评分
    store_logistics_score = scrapy.Field()
