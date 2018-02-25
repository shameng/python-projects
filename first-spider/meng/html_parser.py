# coding: UTF-8

"""
HTML解析器
@author: xindemeng
@time: 2018/2/25 10:19 
"""
import re
import urlparse

from bs4 import BeautifulSoup


class HtmlParser(object):

    def parser(self, page_url, html_content):
        '''
        用于解析网页内容，抽取URL和词条的标题和摘要信息
        :param page_url:
        :param html_content:
        :return:
        '''
        if page_url is None or html_content is None:
            return

        soup = BeautifulSoup(html_content, "html.parser", from_encoding="utf-8")
        new_urls = self._get_new_urls(page_url, soup)
        new_data = self._get_new_data(page_url, soup)
        return new_urls, new_data

    def _get_new_urls(self, page_url, soup):
        '''
        抽取新的URL集合
        :param page_url:
        :param soup:
        :return:
        '''
        new_urls = set()
        links = soup.find_all("a", href=re.compile(r'/item/.+'))
        for link in links:
            new_url = unicode(link.get("href"))
            #拼接成完成网址
            new_full_url = urlparse.urljoin(page_url, new_url)
            new_urls.add(new_full_url)
        return new_urls

    def _get_new_data(self, page_url, soup):
        '''
        抽取词条的标题和摘要信息
        :param page_url:
        :param soup:
        :return:
        '''
        data = {}
        data["url"] = page_url
        title = soup.find("dd", class_="lemmaWgt-lemmaTitle-title").find("h1")
        data["title"] = title.get_text()
        summary = soup.find("div", class_="lemma-summary")
        #获取tag中包含的所有文本内容，包括子孙tag中的内容，并将结果作为Unicode字符串返回
        data["summary"] = summary.get_text()
        return data