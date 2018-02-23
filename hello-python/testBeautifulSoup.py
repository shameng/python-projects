#-*- coding: UTF-8 -*-

import unittest

import requests
from bs4 import BeautifulSoup


class MyTestCase(unittest.TestCase):

    @unittest.skip
    def test1(self):
        r = requests.get("http://www.baidu.com")
        html = r.content
        soup = BeautifulSoup(html, "lxml", from_encoding="UTF-8")
        # print(soup.prettify())
        print(soup.title)
        print(soup.title.name)
        print(soup.a.get("class"))
        print(soup.a.attrs)
        print(soup.a.string)
        print(type(soup.a.string))

        print(len(soup.head.contents))
        print(soup.head.contents)
        # 打印只包含直接子节点
        for child in soup.head.children:
            print(child)
        # 打印包含子孙节点
        for child in soup.head.descendants:
            print(child)

        for str in soup.strings:
            print(repr(str))
        print("-----------------------------------")
        for str in soup.stripped_strings:
            print(repr(str))
            print(str)

        print(soup.title)
        print(soup.title.parent)
        for parent in soup.title.parents:
            if parent is None:
                print(parent)
            else:
                print(parent.name)

        print("+++++++++++++++++++++++++++++++++++++++")
        for element in soup.title.next_elements:
            print(element)

    def testFindAll(self):
        r = requests.get("http://www.baidu.com")
        html = r.content
        soup = BeautifulSoup(html, "lxml", from_encoding="UTF-8")
        for tag in soup.find_all("a"):
            print(tag)

if __name__ == '__main__':
    unittest.main()
