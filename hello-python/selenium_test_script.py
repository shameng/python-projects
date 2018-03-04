# coding: UTF-8
from selenium import webdriver
import time

"""
执行 JavaScript 语句
@author: xindemeng
@time: 2018/2/24 18:53
"""

driver = webdriver.PhantomJS(executable_path="F:\\Python\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe")
driver.get("https://movie.douban.com/typerank?type_name=剧情&type=11&interval_id=100:90&action=")

# 向下滚动10000像素
js = "document.body.scrollTop=10000"
#js="var q=document.documentElement.scrollTop=10000"
time.sleep(5)

driver.save_screenshot("douban_juqing.png")

driver.execute_script(js)
time.sleep(10)

driver.save_screenshot("douban_juqing2.png")

driver.quit()