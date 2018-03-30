# coding: UTF-8

""" 

@author: xindemeng
@time: 2018/3/30 13:29 
"""
from lxml import etree

html = etree.parse("page1.html")
items = html.xpath("//li[@class='gl-item']")

for item in items:
    item_name = item.xpath(".//div[@class='p-name']//em").extract()[0]
    item_url = item.xpath(".//div[@class='p-name']/a/@href").extract()[0]
    item_pic_url = item.xpath(".//div[@class='p-img']//img/@src").extract()[0]
    item_data_sku = item.xpath("./div/@data-sku").extract()[0]

    print(item_name, item_url, item_pic_url, item_data_sku)