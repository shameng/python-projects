# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class DouyuTupianItem(scrapy.Item):
    # define the fields for your item here like:
    nickname = scrapy.Field()
    # 图片链接
    image_link = scrapy.Field()
    # 图片本地的保存路径
    image_path = scrapy.Field()
    # pass
