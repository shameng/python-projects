import unittest
import re

class MyTestCase(unittest.TestCase):

    def test_match(self):
        pattern = re.compile(r"\d+")
        m = pattern.match("aaa123bbb456")
        print(m)

        m = pattern.match("aaa123bbb456", 3)
        print(m)
        print(m.group())
        m = pattern.match("aaa123bbb456", 3, 5)
        print(m)
        print(m.group())

    def test_search(self):
        pattern = re.compile(r"\d+")
        m = pattern.search("aaa123bbb456")
        print(m)
        print(m.group())

    def test_findall(self):
        pattern = re.compile(r"\d+")
        m = pattern.findall("aaa123bbb456")
        print(m)

    def test_split(self):
        pattern = re.compile("[\s\d\\\;]+")
        m = pattern.split(r"a bb\aa;m1m   123   a")
        print(m)
        m = pattern.split("a bb\aa;m1m   123   a")
        print(m)

        pattern = re.compile("[\s\d\\\;]")
        m = pattern.split(r"a bb\aa;m1m   123   a")
        print(m)

    def test_span(self):
        pattern = re.compile(r"(\w+) (\w+)")
        str = "hello 123, hello 456";
        m = pattern.sub("hello world", str)
        print(m)

        m = pattern.sub(r"\2 \1", str)
        print(m)

if __name__ == '__main__':
    unittest.main()
