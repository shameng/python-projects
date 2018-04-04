# coding: UTF-8

import pymongo
from datetime import datetime

""" 

@author: xindemeng
@time: 2018/4/4 22:37 
"""

client = pymongo.MongoClient("localhost", 27017)

db = client.test

collection = db.books

book = {"author": "meng",
        "content": "xindemeng",
        "date": datetime.utcnow()}
book_id = collection.insert(book)
print(book_id)

book = collection.find_one()
print(book)

book = collection.find_one({"author": "meng"})
print(book)

for b in collection.find():
    print(b)

print(collection.find({"author": "meng"}).count())

collection.update({"author": "meng"}, {"$set": {"text": "Python book", "text2": "another Python book"}})
print(collection.find_one({"author": "meng"}))

collection.remove({"author": "meng"})
print(collection.find({"author": "meng"}))
