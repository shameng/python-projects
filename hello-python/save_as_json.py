# coding: UTF-8
import json

import requests
from bs4 import BeautifulSoup

user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36"
headers = {"User-Agent":user_agent}
r = requests.get("http://seputu.com/", headers=headers)
soup = BeautifulSoup(r.text, "html.parser", from_encoding="utf-8")
content = []
for mulu in soup.find_all(class_="mulu"):
    h2 = mulu.find("h2")
    if h2 != None:
        h2_title = h2.string
        box_list = []
        for a in mulu.find(class_="box").find_all("a"):
            href = a.get("href")
            box_title = a.get("title")
            box_list.append({"href": href, "box_title": box_title})

        content.append({"title": h2_title, "content": box_list})

with open("daomubiji.json", "wb") as fp:
    json.dump(content, fp=fp, indent=4)




