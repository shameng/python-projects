#-*- coding: UTF-8 -*-

print("Hello, world!")
# name = input("请输入你的名字：")
# print("name: " + name);

a = 100
if a >= 0:
    print("a>=0")
else:
    print("a<0")

print('''line1
line2
line3''')

print(10 / 3)
print(10 // 3)
print(9 / 3)

print('%2d-%02d' % (3, 1))
print('%.2f' % 3.1415926)
print('growth rate: %d %%' % 7)

sum = 0
for x in range(5):
    sum = sum + x
print(sum)

sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print(sum)

d = {'xin':'meng'}
print(d.get('Thomas'))

print((1, 2))

a = [1, 2]
print(a)
print(a[1])

L1 = ['Hello', 'World', 18, 'Apple', None]
L2 = [l for l in L1 if isinstance(l, str)]
print(L2)

print(None and None.strip())

def date():
    print("20180126")
date()
print(date.__name__)
print(date.__class__)

import functools
def log(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator

@log('execute')
def now():
    print('2015-3-25')

now()

import io
a = io.open("test.txt", "r", encoding="UTF-8")
print(a.read())
# for line in a.readline():
#     print(line.strip())
a.close()

# with io.open("test.txt", "w", encoding="UTF-8") as a:
#     # print(a.read())
#     a.write("Hello, World!")
with open('test.txt', 'w') as f:
    f.write('Hello, world!')

from io import StringIO
f = StringIO(unicode('Hello!\nHi!\nGoodbye!'))
while True:
    s = f.readline()
    if s == '':
        break
    print(s.strip())

#python的str默认是ascii编码，和unicode编码冲突
import sys
reload(sys)
sys.setdefaultencoding('utf8')
from io import BytesIO
f = BytesIO()
f.write('中文'.encode('utf-8'))
print(f.getvalue())
