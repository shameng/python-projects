# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
from jd_spider.settings import REDIS_HOST, REDIS_PORT

import redis


class RedisFactory(object):

    def __init__(self):
        self.redis_pool = redis.ConnectionPool(host=REDIS_HOST, port=REDIS_PORT)

    def get_instance(self):
        return redis.Redis(connection_pool=self.redis_pool)


redis_factory = RedisFactory()


