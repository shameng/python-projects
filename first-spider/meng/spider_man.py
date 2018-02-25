# coding: UTF-8
from meng.data_ouput import DataOutput
from meng.html_downloader import HtmlDownloader
from meng.html_parser import HtmlParser
from meng.url_manager import UrlManager

""" 
爬虫调度器
@author: xindemeng
@time: 2018/2/25 11:10 
"""
class SpiderMan(object):

    def __init__(self):
        self.manager = UrlManager()
        self.downloader = HtmlDownloader()
        self.parser = HtmlParser()
        self.output = DataOutput()

    def crawl(self, root_url):
        #添加入口url
        self.manager.add_new_url(root_url)
        #只爬取100条
        while(self.manager.has_new_url() and self.manager.old_url_size() < 100):
            try:
                # 从URL管理器获取新的url
                new_url = self.manager.get_new_url()
                # 从HTML下载器下载网页
                html = self.downloader.download(new_url)
                # HTML解析器抽取网页数据
                new_urls, data = self.parser.parser(new_url, html)
                # 将抽取的url添加到URL管理器里
                self.manager.add_new_urls(new_urls)
                # 数据存储气存储文件
                self.output.store_data(data)
                print("已经爬取了%s个链接" % self.manager.old_url_size())
            except Exception, e:
                print("crawl failed, Exception:%s" % e.message)
        # 数据存储器将文件输出成指定格式
        self.output.output_html()

if __name__ == '__main__':
    spider_man = SpiderMan()
    spider_man.crawl("https://baike.baidu.com/item/%E8%A0%95%E8%99%AB/4454365")