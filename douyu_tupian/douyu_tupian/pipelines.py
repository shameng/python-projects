# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import os

import scrapy
from scrapy.pipelines.images import ImagesPipeline
from scrapy.utils.project import get_project_settings

class DouyuTupianPipeline(ImagesPipeline):

    # def process_item(self, item, spider):
    #     return item

    IMAGES_STORE = get_project_settings().get("IMAGES_STORE")

    def get_media_requests(self, item, info):
        image_link = item["image_link"]
        yield scrapy.Request(image_link)

    def item_completed(self, results, item, info):
        image_path = [x for ok, x in results if ok]

        os.rename(self.IMAGES_STORE + image_path[0].get("path"), self.IMAGES_STORE + item["nickname"] + ".jpg")

        item["image_path"] = self.IMAGES_STORE + item["nickname"] + ".jpg"

        return item
