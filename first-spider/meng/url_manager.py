# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
class UrlManager(object):

    def __init__(self):
        self.new_urls = set()#未爬取的URL集合
        self.old_urls = set()#已爬取的URL集合

    def has_new_url(self):
        '''
        判断是否有未爬取的URL
        :return:
        '''
        return self.new_url_size() != 0

    def new_url_size(self):
        return len(self.new_urls)

    def old_url_size(self):
        return len(self.old_urls)

    def get_new_url(self):
        new_url = self.new_urls.pop()
        self.old_urls.add(new_url)
        return new_url