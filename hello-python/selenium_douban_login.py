# coding: UTF-8

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

"""
模拟登陆豆瓣
@author: xindemeng
@time: 2018/2/24 18:53
"""

# 设置的环境变量没效，所以要设置executable_path属性
driver = webdriver.PhantomJS(executable_path="F:\\Python\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe")
# driver = webdriver.PhantomJS()
driver.get("http://www.douban.com")

driver.save_screenshot("douban.png")

driver.find_element_by_id("form_email").send_keys("879163994@qq.com")
driver.find_element_by_id("form_password").send_keys("tan+3580219")

driver.find_element_by_xpath("//input[@class='bn-submit']").click()

time.sleep(3)

driver.save_screenshot("douban2.png")

with open("douban.html", "w") as file:
    file.write(driver.page_source.encode("utf-8"))

driver.quit()
