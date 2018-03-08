# -*- coding: utf-8 -*-
import json

import scrapy

from douyu_tupian.items import DouyuTupianItem


class DouyuSpiderSpider(scrapy.Spider):
    name = 'douyu_spider'
    allowed_domains = ['capi.douyucdn.cn']

    offset = 0;
    url = "http://capi.douyucdn.cn/api/v1/getVerticalRoom?limit=20&offset="

    start_urls = [url + str(offset)]

    def parse(self, response):
        data = json.loads(response.text)["data"]

        for each in data:
            item = DouyuTupianItem()
            item["nickname"] = each.get("nickname")
            item["image_link"] = each.get("vertical_src")

            yield item

        self.offset +=20
        yield scrapy.Request(self.url + str(self.offset), callback=self.parse)
