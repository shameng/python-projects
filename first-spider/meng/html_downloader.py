# coding: UTF-8

"""
HTML下载器
@author: xindemeng
@time: 2018/2/25 10:04 
"""
import requests


class HtmlDownloader(object):

    def download(self, url):
        if url is None:
            return None
        user_agent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36"
        headers = {"User-Agent": user_agent}
        r = requests.get(url, headers=headers)
        if r.status_code == 200:
            r.encoding = "UTF-8"
            return r.text
        return None