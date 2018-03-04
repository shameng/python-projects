# coding: UTF-8
import unittest
from selenium import webdriver
from bs4 import BeautifulSoup
import time

"""
动态页面模拟点击，抓取斗鱼网站
@author: xindemeng
@time: 2018/2/24 18:53
"""


class DouyuSelenium(unittest.TestCase):

    def setUp(self):
        print '加载开始...'
        self.driver = webdriver.PhantomJS(executable_path="F:\\Python\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe")

    def testDouyu(self):
        self.driver.get("https://www.douyu.com/directory/all")

        while True:
            soup = BeautifulSoup(self.driver.page_source, "xml")
            content_list = soup.find("div", {"id": "live-list-content"})
            titles = content_list.find_all("span", {"class": "dy-name ellipsis fl"})
            nums = content_list.find_all("span", {"class": "dy-num fr"})

            for title, num in zip(titles, nums):
                print u"观众人数:" + num.get_text().strip(), u"\t房间标题: " + title.get_text().strip()

            # 如果到了最后一页，则退出循环
            if self.driver.page_source.find("shark-pager-disable-next") != -1:
                print "已到最后一页，退出循环"
                break

            # 睡眠一秒，否则会抛异常 org.openqa.selenium.StaleElementReferenceException
            time.sleep(1)
            # 模拟点击下一页
            self.driver.find_element_by_class_name("shark-pager-next").click()
            print "模拟点击下一页"

    def tearDown(self):
        print '加载完成...'
        self.driver.quit()


if __name__ == '__main__':
    unittest.main()
