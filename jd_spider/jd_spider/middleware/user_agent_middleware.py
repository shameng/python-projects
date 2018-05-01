# coding: UTF-8

"""
@author: xindemeng
@time: 2018/2/24 18:53
"""
from scrapy.downloadermiddlewares.useragent import UserAgentMiddleware
import random


class MyUserAgentMiddleware(UserAgentMiddleware):

    def __init__(self, user_agents):
        self.user_agents = user_agents

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            user_agents=crawler.settings.get('MY_USER_AGENTS')
        )

    def process_request(self, request, spider):
        if self.user_agents and len(self.user_agents) > 0:
            agent = random.choice(self.user_agents)
            request.headers['User-Agent'] = agent
        else:
            super(MyUserAgentMiddleware, self).process_request(request, spider)
