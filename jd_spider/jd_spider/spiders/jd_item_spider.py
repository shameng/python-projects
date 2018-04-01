# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
import json

import scrapy


class JDItemSpider(scrapy.Spider):

    # 爬虫的名称
    name = "jd_item_spider"

    # 允许的域名
    allowed_domains = ["jd.com"]

    start_urls = ["https://item.jd.com/12445209178.html"]

    def parse(self, response):
        infos = response.xpath("//ul[@class='parameter2 p-parameter-list']/li/text()").extract()

        info_dict = {}
        for info in infos:
            arr = info.split("：".decode(encoding="UTF-8"))
            info_dict[arr[0]] = arr[1]

        info_json = json.dumps(info_dict)

        print("info: ", info_json)

        # 店铺评分
        store_score = response.xpath("//em[@class='evaluate-grade']//a/text()").extract()[0]
        print("store_score", store_score)

        scores = response.xpath("//div[@class='score-detail']/em/text()").extract()
        store_items_score = scores[0]
        store_service_score = scores[1]
        store_logistics_score = scores[2]

        print("store_items_score: ", store_items_score)
        print("store_service_score: ", store_service_score)
        print("store_logistics_score: ", store_logistics_score)

