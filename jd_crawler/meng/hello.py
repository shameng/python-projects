# coding: UTF-8
import os
import re
from json.decoder import JSONDecodeError
# 需要通过pip安装 pip install BeautifulSoup4
from bs4 import BeautifulSoup
import urllib.request
import json
import csv
import multiprocessing

# 筛选函数，用于比较list_in里面的内容是否在str_name中，如果不在则返回False
def IsInChar(str_name, list_in):
    for item in list_in:
        if item.strip() not in str_name.strip():
            continue
        else:
            return True
    return False


# 爬取函数，用于爬取指定的picurl数据，并将结果初始为dict格式，itemurl为京东某一个商品的url，例如https://item.jd.com/584300.html，picurl为需要获取api接口的url，后面的价格，卖价信息，评论信息都是通过api接口获取的
def scrapeurl(itemurl, picurl):
    # 控制爬取速率
    time.sleep(1)
    trynum = 0
    # 通过itemurl获取商品的id
    itemOId = itemurl.strip().split('/')[-1].split('.html')[0]
    itemNId = 'J_' + itemOId
    useragent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    headers = {'User-Agent': useragent, 'Referer': 'https://item.jd.com/%s.html' % itemOId}
    picurl = picurl + '%s' % itemOId
    req = urllib.request.Request(picurl, headers=headers)
    html1 = urllib.request.urlopen(req, timeout=5)
    try:
        # 由于会用中文等信息，所以使用gb18030解码，该编码支持gb2312和utf-8
        res = html1.read().decode('gb18030')
        if re.match('^\w', res):
            # 使用re.split对res进行多个字符分割(分割的字符是"()")
            res = re.split('\(|\)', res)[1]
            # 将res中间的内容进行拼接，防止字符中包含"()",导致上一步的re.split的结果不是预期的结果
            res = ''.join(res[1:-1])
        res = json.loads(res)
    # 出错重试代码，重试3次
    except UnicodeDecodeError:
        if trynum > 3:
            pass
        else:
            while trynum <= 3:
                time.sleep(2)
                req = urllib.request.Request(picurl, headers=headers)
                html1 = urllib.request.urlopen(req, timeout=5)
                # 无法使用gb18030解码的时，使用ascii解码，并忽略无法解码的内容
                res = html1.read().decode('ascii', 'ignore')
                if re.match('^\w', res):
                    # 使用re.split对res进行多个字符分割(分割的字符是"()")
                    res = re.split('[()]', res)
                res = json.loads(res)
                trynum += 1
    except (JSONDecodeError, IndexError) as err:
        if trynum > 3:
            pass
        else:
            while trynum <= 3:
                time.sleep(2)
                req = urllib.request.Request(picurl, headers=headers)
                html1 = urllib.request.urlopen(req, timeout=5)
                res = html1.read().decode('gb18030')
                if re.match('^\w', res):
                    # 使用re.split对res进行多个字符分割(分割的字符是"()")
                    res = re.split('\(|\)', res)
                    # 将res中间的内容进行拼接，防止字符中包含"()",导致上一步的re.split的结果不是预期的结果
                    res = ''.join(res[1:-1])
                res = json.loads(res)
                trynum += 1

    result = {}
    result[itemNId] = res
    return result


# 获取京东商品价格的函数，需要输入商品的url地址
def scrapejdprice(url):
    retrynum = 0
    # picurl为京东商品价格api接口，"skuIds=J_"为具体的商品id，由于scrapeurl函数会拼接，所以这里不用指名具体的商品id
    picurl = 'https://p.3.cn/prices/mgets?skuIds=J_'
    res = scrapeurl(url, picurl)
    itemID = list(res.keys())[0]
    price = {}
    # 获取商品价格信息
    price[itemID] = {'price': res[itemID][0]['p']}
    return price


# 爬取京东商品的评论信息
def scrapejdcomment(url):
    # picurl为京东商品评论api接口
    picurl = 'https://club.jd.com/comment/productCommentSummaries.action?referenceIds='
    res = scrapeurl(url, picurl)
    itemID = list(res.keys())[0]
    try:
        # 获取所有评论信息
        allComment = res[itemID]['CommentsCount'][0]['CommentCount']
        # 获取所有好评信息
        goodComment = res[itemID]['CommentsCount'][0]['GoodCount']
        # 获取所有中评信息
        generalComment = res[itemID]['CommentsCount'][0]['GeneralCount']
        # 获取所有差评信息
        poorComment = res[itemID]['CommentsCount'][0]['PoorCount']
        # 获取所有追加评信息
        afterComment = res[itemID]['CommentsCount'][0]['AfterCount']
        # 获取所有好评率信息
        goodCommentrate = res[itemID]['CommentsCount'][0]['GoodRate']
        # 获取所有中评率信息
        generalCommentrate = res[itemID]['CommentsCount'][0]['GeneralRate']
        # 获取所有差评率信息
        poorCommentrate = res[itemID]['CommentsCount'][0]['PoorRate']
        # 获取平均得得分信息
        averagescore = res[itemID]['CommentsCount'][0]['AverageScore']
    except TypeError:
        allComment = goodComment = generalComment = poorComment = afterComment = goodCommentrate = generalCommentrate = poorCommentrate = averagescore = 'Null'
    comment = {}
    comment[itemID] = {'CommentCount': allComment, 'GoodCount': goodComment, 'GeneralCount': generalComment,
                       'PoorCount': poorComment, 'AfterComment': afterComment, 'AveScore': averagescore,
                       'GoodRate': goodCommentrate, 'GeneralRate': generalCommentrate, 'PoorRate': poorCommentrate}
    return comment


# 爬取卖家名称
def scrapejdsellerinfo(url):
    # picurl为京东商品卖家信息api接口
    picurl = 'https://chat1.jd.com/api/checkChat?returnCharset=utf-8&pid='
    res = scrapeurl(url, picurl)
    itemID = list(res.keys())[0]
    sellerinfo = {}
    # 获取卖家名称，卖家ID，卖家IM信息
    sellerinfo[itemID] = {'seller': res[itemID]['seller'], 'sellerID': res[itemID]['venderId'], 'chatUrl': res[itemID]['chatUrl']}
    return sellerinfo


# 爬取京东商品类型的价格，需要输入商品名称和需要爬取的网页页数
def scrapejd(itemname, page):
    itemname = urllib.request.quote(itemname)
    s = 1
    urllist = set()
    result = {}
    # 过滤条件
    filterlist = ['租赁', '二手']
    for i in range(1, page + 1):
        # url为京东查询商品的api接口，因为每一页只有28个商品信息，所以需要传入页面和每页的商品数量
        url = 'https://search.jd.com/Search?keyword=%s&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&wq=%s&page=%d&s=%d&click=0' % (itemname, itemname, i, s)
        s += 28
        html = urllib.request.urlopen(url, timeout=5)
        bsObj = BeautifulSoup(html, 'html.parser', from_encoding="gb18030")
        html.close()
        urllistend = bsObj.findAll('div', {'class': 'p-name'})
        for lists in urllistend:
            try:
                title = lists.a.attrs['title']
                # 过滤title里面包含filterlist里面的内容，只获取不包含filterlist内容的title
                if not IsInChar(title, filterlist) and re.search('^\/\/item\.jd\.com/[0-9]+\.html$', lists.a.attrs['href']):
                    itemurl = 'https:' + lists.a.attrs['href']
                    # 去除重复的itemurl
                    if itemurl not in urllist:
                        itemid = itemurl.strip().split('/')[-1].split('.html')[0]
                        itemid = 'J_' + itemid
                        urllist.add(itemurl)
                        pic = scrapejdprice(itemurl)[itemid]['price']
                        comment = scrapejdcomment(itemurl)[itemid]
                        sellerinfo = scrapejdsellerinfo(itemurl)[itemid]
                        # 筛选价格区间
                        # if 100 < float(pic) < 1000:
                        result[itemid] = {'title': title, 'price': pic, 'itemurl': itemurl, 'AveScore': comment['AveScore'],
                                          'CommentCount': comment['CommentCount'], 'GoodCount': comment['GoodCount'], 'GeneralCount': comment['GeneralCount'],
                                          'PoorCount': comment['PoorCount'], 'AfterComment': comment['AfterComment'], 'GoodRate': comment['GoodRate'],
                                          'GeneralRate': comment['GeneralRate'], 'PoorRate': comment['PoorRate'], 'sellername': sellerinfo['seller'],
                                          'sellerID': sellerinfo['sellerID']}
            except:
                pass
    # 将结果保存为csv文件
    # os.path.dirname(__file__)返回脚本的路径
    # os.path.dirname(path)——返回文件路径
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    FILE_DIR = os.path.join(BASE_DIR, 'jdprice')
    # os.path.isfile()——判断指定对象是否为文件。是返回True,否则False
    # os.path.isdir()——判断指定对象是否为目录。是True,否则False
    if not os.path.isdir(FILE_DIR):
        os.mkdir(FILE_DIR)
    filename = os.path.join(FILE_DIR, '%s.csv' % urllib.request.unquote(itemname))
    with open(filename, 'w+', newline='', encoding='gb18030') as csvfile:
        res = csv.writer(csvfile)
        res.writerow(('价格', '商品名称', '商品地址', '平均等分', '卖家名称', '卖家ID', '总评价', '好评数', '中评数', '差评数', '好评率', '总评率', '差评率'))
        for item in result:
            res.writerow((result[item]['price'], result[item]['title'], result[item]['itemurl'], result[item]['AveScore'], result[item]['sellername'],
                          result[item]['sellerID'], result[item]['CommentCount'], result[item]['GoodCount'], result[item]['GeneralCount'], result[item]['PoorCount'],
                          result[item]['GoodRate'], result[item]['GeneralRate'], result[item]['PoorRate']))


# 使用多进程处理函数,target表示函数名称,args表示需要传递给函数的参数,name表示线程名称
def mainProcess(itemlist, pagenum):
    print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()))
    processlist = []
    # 创建多个进程
    for i in range(len(itemlist)):
        p = multiprocessing.Process(target=scrapejd, args=('%s' % itemlist[i], pagenum))
        p.daemon = True
        processlist.append(p)
    for process in processlist:
        process.start()
    for process in processlist:
        process.join()
    print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()))

# 另外，为了能控制多进程的进程数量，可以考虑使用进程池的方式，由于本人使用进程池的时候出现问题，所以无法提供进程池的代码，如果有大神知道如何使用，请告诉本人