#-*- coding: UTF-8 -*-

import unittest

import requests


class MyTestCase(unittest.TestCase):

    # @unittest.skip
    def testGet(self):
        r = requests.get("http://www.baidu.com")
        print(r.encoding)
        print(r.content)
        # print(r.text)
        # r.encoding = "utf-8"
        # print(r.text)
        if r.status_code == requests.codes.ok:
            print(r.status_code)
            print(r.headers)
            print(r.headers.get("content-type"))
        else:
            r.raise_for_status()

        # payload = {"wd":"python"}
        # r = requests.get("http://www.baidu.com/s", params=payload)
        # print(r.url)
        # print(r.content)

    @unittest.skip
    def testPost(self):
        postData = {"key": "value"}
        r = requests.post("http://www.baidu.com", data=postData)
        print(r.content)

    @unittest.skip
    def testCookie(self):
        user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36"
        headers = {"User-Agent": user_agent}
        r = requests.get("http://www.baidu.com", headers=headers)
        # 遍历所有的cookie字段的值
        for cookie in r.cookies.keys():
            print(cookie + ":" + r.cookies.get(cookie))

    @unittest.skip
    def testRedirect(self):
        r = requests.get("http://github.com")
        print(r.url)
        print(r.status_code)
        print(r.history)


if __name__ == '__main__':
    unittest.main()
