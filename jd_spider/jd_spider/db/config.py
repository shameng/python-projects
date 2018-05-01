# coding:utf-8
'''
数据库的配置
'''
DB_CONFIG = {

    'DB_CONNECT_TYPE': 'sqlalchemy',  # 'pymongo'sqlalchemy;redis
    # 'DB_CONNECT_STRING':'mongodb://localhost:27017/'
    # 'DB_CONNECT_STRING': 'sqlite:///' + os.path.dirname(__file__) + '/data/proxy.db'
    # 'DB_CONNECT_STRING': 'mysql+mysqldb://root:root@localhost:3306/ip_proxy?charset=utf8'
    'DB_CONNECT_STRING': 'mysql+pymysql://root:root@localhost:3306/ip_proxy?charset=utf8'

    # 'DB_CONNECT_TYPE': 'redis',  # 'pymongo'sqlalchemy;redis
    # 'DB_CONNECT_STRING': 'redis://localhost:6379/8',

}

#默认给抓取的ip分配10分,每次连接失败,减一分,直到分数全部扣完从数据库中删除
DEFAULT_SCORE = 10
