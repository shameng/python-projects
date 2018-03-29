/*!Name: search_new.init.js
 * Date: 2018-3-20 14:20:2 */
define("search_new", ["jdf/1.0.0/unit/search/1.0.0/search", "jdf/1.0.0/unit/getjsonp/1.0.0/getjsonp", "product/module/clslog", "jdf/1.0.0/ui/lazyload/1.0.0/lazyload", "./search_plug.js?201710"], function (require, exports, module) {
    window.console || (window.console = {}, window.console.log = window.console.error = function () {
    }), window.SEARCH || (window.SEARCH = {}), window.json_city = {
        0: {
            1: "\u5317\u4eac",
            2: "\u4e0a\u6d77",
            3: "\u5929\u6d25",
            4: "\u91cd\u5e86",
            5: "\u6cb3\u5317",
            6: "\u5c71\u897f",
            7: "\u6cb3\u5357",
            8: "\u8fbd\u5b81",
            9: "\u5409\u6797",
            10: "\u9ed1\u9f99\u6c5f",
            11: "\u5185\u8499\u53e4",
            12: "\u6c5f\u82cf",
            13: "\u5c71\u4e1c",
            14: "\u5b89\u5fbd",
            15: "\u6d59\u6c5f",
            16: "\u798f\u5efa",
            17: "\u6e56\u5317",
            18: "\u6e56\u5357",
            19: "\u5e7f\u4e1c",
            20: "\u5e7f\u897f",
            21: "\u6c5f\u897f",
            22: "\u56db\u5ddd",
            23: "\u6d77\u5357",
            24: "\u8d35\u5dde",
            25: "\u4e91\u5357",
            26: "\u897f\u85cf",
            27: "\u9655\u897f",
            28: "\u7518\u8083",
            29: "\u9752\u6d77",
            30: "\u5b81\u590f",
            31: "\u65b0\u7586",
            32: "\u53f0\u6e7e",
            52993: "\u6e2f\u6fb3",
            84: "\u9493\u9c7c\u5c9b",
            53283: "\u6d77\u5916"
        },
        1: {
            72: "\u671d\u9633\u533a",
            2800: "\u6d77\u6dc0\u533a",
            2801: "\u897f\u57ce\u533a",
            2802: "\u4e1c\u57ce\u533a",
            2803: "\u5d07\u6587\u533a",
            2804: "\u5ba3\u6b66\u533a",
            2805: "\u4e30\u53f0\u533a",
            2806: "\u77f3\u666f\u5c71\u533a",
            2807: "\u95e8\u5934\u6c9f",
            2808: "\u623f\u5c71\u533a",
            2809: "\u901a\u5dde\u533a",
            2810: "\u5927\u5174\u533a",
            2812: "\u987a\u4e49\u533a",
            2814: "\u6000\u67d4\u533a",
            2816: "\u5bc6\u4e91\u533a",
            2901: "\u660c\u5e73\u533a",
            2953: "\u5e73\u8c37\u533a",
            3065: "\u5ef6\u5e86\u53bf"
        },
        2: {
            2813: "\u5f90\u6c47\u533a",
            2815: "\u957f\u5b81\u533a",
            2817: "\u9759\u5b89\u533a",
            2820: "\u95f8\u5317\u533a",
            2822: "\u8679\u53e3\u533a",
            2823: "\u6768\u6d66\u533a",
            2824: "\u5b9d\u5c71\u533a",
            2825: "\u95f5\u884c\u533a",
            2826: "\u5609\u5b9a\u533a",
            2830: "\u6d66\u4e1c\u65b0\u533a",
            2833: "\u9752\u6d66\u533a",
            2834: "\u677e\u6c5f\u533a",
            2835: "\u91d1\u5c71\u533a",
            2836: "\u5357\u6c47\u533a",
            2837: "\u5949\u8d24\u533a",
            2841: "\u666e\u9640\u533a",
            2919: "\u5d07\u660e\u53bf",
            78: "\u9ec4\u6d66\u533a"
        },
        3: {
            51035: "\u4e1c\u4e3d\u533a",
            51036: "\u548c\u5e73\u533a",
            51037: "\u6cb3\u5317\u533a",
            51038: "\u6cb3\u4e1c\u533a",
            51039: "\u6cb3\u897f\u533a",
            51040: "\u7ea2\u6865\u533a",
            51041: "\u84df\u53bf",
            51042: "\u9759\u6d77\u53bf",
            51043: "\u5357\u5f00\u533a",
            51044: "\u5858\u6cbd\u533a",
            51045: "\u897f\u9752\u533a",
            51046: "\u6b66\u6e05\u533a",
            51047: "\u6d25\u5357\u533a",
            51048: "\u6c49\u6cbd\u533a",
            51049: "\u5927\u6e2f\u533a",
            51050: "\u5317\u8fb0\u533a",
            51051: "\u5b9d\u577b\u533a",
            51052: "\u5b81\u6cb3\u53bf"
        },
        4: {
            113: "\u4e07\u5dde\u533a",
            114: "\u6daa\u9675\u533a",
            115: "\u6881\u5e73\u53bf",
            119: "\u5357\u5ddd\u533a",
            123: "\u6f7c\u5357\u53bf",
            126: "\u5927\u8db3\u533a",
            128: "\u9ed4\u6c5f\u533a",
            129: "\u6b66\u9686\u53bf",
            130: "\u4e30\u90fd\u53bf",
            131: "\u5949\u8282\u53bf",
            132: "\u5f00\u53bf",
            133: "\u4e91\u9633\u53bf",
            134: "\u5fe0\u53bf",
            135: "\u5deb\u6eaa\u53bf",
            136: "\u5deb\u5c71\u53bf",
            137: "\u77f3\u67f1\u53bf",
            138: "\u5f6d\u6c34\u53bf",
            139: "\u57ab\u6c5f\u53bf",
            140: "\u9149\u9633\u53bf",
            141: "\u79c0\u5c71\u53bf",
            48131: "\u74a7\u5c71\u53bf",
            48132: "\u8363\u660c\u53bf",
            48133: "\u94dc\u6881\u53bf",
            48201: "\u5408\u5ddd\u533a",
            48202: "\u5df4\u5357\u533a",
            48203: "\u5317\u789a\u533a",
            48204: "\u6c5f\u6d25\u533a",
            48205: "\u6e1d\u5317\u533a",
            48206: "\u957f\u5bff\u533a",
            48207: "\u6c38\u5ddd\u533a",
            50950: "\u6c5f\u5317\u533a",
            50951: "\u5357\u5cb8\u533a",
            50952: "\u4e5d\u9f99\u5761\u533a",
            50953: "\u6c99\u576a\u575d\u533a",
            50954: "\u5927\u6e21\u53e3\u533a",
            50995: "\u7da6\u6c5f\u533a",
            51026: "\u6e1d\u4e2d\u533a",
            51027: "\u9ad8\u65b0\u533a",
            51028: "\u5317\u90e8\u65b0\u533a",
            4164: "\u57ce\u53e3\u53bf",
            3076: "\u9ad8\u65b0\u533a"
        },
        5: {
            142: "\u77f3\u5bb6\u5e84\u5e02",
            148: "\u90af\u90f8\u5e02",
            164: "\u90a2\u53f0\u5e02",
            199: "\u4fdd\u5b9a\u5e02",
            224: "\u5f20\u5bb6\u53e3\u5e02",
            239: "\u627f\u5fb7\u5e02",
            248: "\u79e6\u7687\u5c9b\u5e02",
            258: "\u5510\u5c71\u5e02",
            264: "\u6ca7\u5dde\u5e02",
            274: "\u5eca\u574a\u5e02",
            275: "\u8861\u6c34\u5e02"
        },
        6: {
            303: "\u592a\u539f\u5e02",
            309: "\u5927\u540c\u5e02",
            318: "\u9633\u6cc9\u5e02",
            325: "\u664b\u57ce\u5e02",
            330: "\u6714\u5dde\u5e02",
            336: "\u664b\u4e2d\u5e02",
            350: "\u5ffb\u5dde\u5e02",
            368: "\u5415\u6881\u5e02",
            379: "\u4e34\u6c7e\u5e02",
            398: "\u8fd0\u57ce\u5e02",
            3074: "\u957f\u6cbb\u5e02"
        },
        7: {
            412: "\u90d1\u5dde\u5e02",
            420: "\u5f00\u5c01\u5e02",
            427: "\u6d1b\u9633\u5e02",
            438: "\u5e73\u9876\u5c71\u5e02",
            446: "\u7126\u4f5c\u5e02",
            454: "\u9e64\u58c1\u5e02",
            458: "\u65b0\u4e61\u5e02",
            468: "\u5b89\u9633\u5e02",
            475: "\u6fee\u9633\u5e02",
            482: "\u8bb8\u660c\u5e02",
            489: "\u6f2f\u6cb3\u5e02",
            495: "\u4e09\u95e8\u5ce1\u5e02",
            502: "\u5357\u9633\u5e02",
            517: "\u5546\u4e18\u5e02",
            527: "\u5468\u53e3\u5e02",
            538: "\u9a7b\u9a6c\u5e97\u5e02",
            549: "\u4fe1\u9633\u5e02",
            2780: "\u6d4e\u6e90\u5e02"
        },
        8: {
            560: "\u6c88\u9633\u5e02",
            573: "\u5927\u8fde\u5e02",
            579: "\u978d\u5c71\u5e02",
            584: "\u629a\u987a\u5e02",
            589: "\u672c\u6eaa\u5e02",
            593: "\u4e39\u4e1c\u5e02",
            598: "\u9526\u5dde\u5e02",
            604: "\u846b\u82a6\u5c9b\u5e02",
            609: "\u8425\u53e3\u5e02",
            613: "\u76d8\u9526\u5e02",
            617: "\u961c\u65b0\u5e02",
            621: "\u8fbd\u9633\u5e02",
            632: "\u671d\u9633\u5e02",
            6858: "\u94c1\u5cad\u5e02"
        },
        9: {
            639: "\u957f\u6625\u5e02",
            644: "\u5409\u6797\u5e02",
            651: "\u56db\u5e73\u5e02",
            2992: "\u8fbd\u6e90\u5e02",
            657: "\u901a\u5316\u5e02",
            664: "\u767d\u5c71\u5e02",
            674: "\u677e\u539f\u5e02",
            681: "\u767d\u57ce\u5e02",
            687: "\u5ef6\u8fb9\u5dde"
        },
        10: {
            727: "\u9e64\u5c97\u5e02",
            731: "\u53cc\u9e2d\u5c71\u5e02",
            737: "\u9e21\u897f\u5e02",
            742: "\u5927\u5e86\u5e02",
            753: "\u4f0a\u6625\u5e02",
            757: "\u7261\u4e39\u6c5f\u5e02",
            765: "\u4f73\u6728\u65af\u5e02",
            773: "\u4e03\u53f0\u6cb3\u5e02",
            776: "\u9ed1\u6cb3\u5e02",
            782: "\u7ee5\u5316\u5e02",
            793: "\u5927\u5174\u5b89\u5cad\u5730\u533a",
            698: "\u54c8\u5c14\u6ee8\u5e02",
            712: "\u9f50\u9f50\u54c8\u5c14\u5e02"
        },
        11: {
            799: "\u547c\u548c\u6d69\u7279\u5e02",
            805: "\u5305\u5934\u5e02",
            810: "\u4e4c\u6d77\u5e02",
            812: "\u8d64\u5cf0\u5e02",
            823: "\u4e4c\u5170\u5bdf\u5e03\u5e02",
            835: "\u9521\u6797\u90ed\u52d2\u76df",
            848: "\u547c\u4f26\u8d1d\u5c14\u5e02",
            870: "\u9102\u5c14\u591a\u65af\u5e02",
            880: "\u5df4\u5f66\u6dd6\u5c14\u5e02",
            891: "\u963f\u62c9\u5584\u76df",
            895: "\u5174\u5b89\u76df",
            902: "\u901a\u8fbd\u5e02"
        },
        12: {
            904: "\u5357\u4eac\u5e02",
            911: "\u5f90\u5dde\u5e02",
            919: "\u8fde\u4e91\u6e2f\u5e02",
            925: "\u6dee\u5b89\u5e02",
            933: "\u5bbf\u8fc1\u5e02",
            939: "\u76d0\u57ce\u5e02",
            951: "\u626c\u5dde\u5e02",
            959: "\u6cf0\u5dde\u5e02",
            965: "\u5357\u901a\u5e02",
            972: "\u9547\u6c5f\u5e02",
            978: "\u5e38\u5dde\u5e02",
            984: "\u65e0\u9521\u5e02",
            988: "\u82cf\u5dde\u5e02"
        },
        13: {
            2900: "\u6d4e\u5b81\u5e02",
            1000: "\u6d4e\u5357\u5e02",
            1007: "\u9752\u5c9b\u5e02",
            1016: "\u6dc4\u535a\u5e02",
            1022: "\u67a3\u5e84\u5e02",
            1025: "\u4e1c\u8425\u5e02",
            1032: "\u6f4d\u574a\u5e02",
            1042: "\u70df\u53f0\u5e02",
            1053: "\u5a01\u6d77\u5e02",
            1058: "\u83b1\u829c\u5e02",
            1060: "\u5fb7\u5dde\u5e02",
            1072: "\u4e34\u6c82\u5e02",
            1081: "\u804a\u57ce\u5e02",
            1090: "\u6ee8\u5dde\u5e02",
            1099: "\u83cf\u6cfd\u5e02",
            1108: "\u65e5\u7167\u5e02",
            1112: "\u6cf0\u5b89\u5e02"
        },
        14: {
            1151: "\u9ec4\u5c71\u5e02",
            1159: "\u6ec1\u5dde\u5e02",
            1167: "\u961c\u9633\u5e02",
            1174: "\u4eb3\u5dde\u5e02",
            1180: "\u5bbf\u5dde\u5e02",
            1201: "\u6c60\u5dde\u5e02",
            1206: "\u516d\u5b89\u5e02",
            2971: "\u5ba3\u57ce\u5e02",
            1114: "\u94dc\u9675\u5e02",
            1116: "\u5408\u80a5\u5e02",
            1121: "\u6dee\u5357\u5e02",
            1124: "\u6dee\u5317\u5e02",
            1127: "\u829c\u6e56\u5e02",
            1132: "\u868c\u57e0\u5e02",
            1137: "\u9a6c\u978d\u5c71\u5e02",
            1140: "\u5b89\u5e86\u5e02"
        },
        15: {
            1158: "\u5b81\u6ce2\u5e02",
            1273: "\u8862\u5dde\u5e02",
            1280: "\u4e3d\u6c34\u5e02",
            1290: "\u53f0\u5dde\u5e02",
            1298: "\u821f\u5c71\u5e02",
            1213: "\u676d\u5dde\u5e02",
            1233: "\u6e29\u5dde\u5e02",
            1243: "\u5609\u5174\u5e02",
            1250: "\u6e56\u5dde\u5e02",
            1255: "\u7ecd\u5174\u5e02",
            1262: "\u91d1\u534e\u5e02"
        },
        16: {
            1303: "\u798f\u5dde\u5e02",
            1315: "\u53a6\u95e8\u5e02",
            1317: "\u4e09\u660e\u5e02",
            1329: "\u8386\u7530\u5e02",
            1332: "\u6cc9\u5dde\u5e02",
            1341: "\u6f33\u5dde\u5e02",
            1352: "\u5357\u5e73\u5e02",
            1362: "\u9f99\u5ca9\u5e02",
            1370: "\u5b81\u5fb7\u5e02"
        },
        17: {
            1432: "\u5b5d\u611f\u5e02",
            1441: "\u9ec4\u5188\u5e02",
            1458: "\u54b8\u5b81\u5e02",
            1466: "\u6069\u65bd\u5dde",
            1475: "\u9102\u5dde\u5e02",
            1477: "\u8346\u95e8\u5e02",
            1479: "\u968f\u5dde\u5e02",
            3154: "\u795e\u519c\u67b6\u6797\u533a",
            1381: "\u6b66\u6c49\u5e02",
            1387: "\u9ec4\u77f3\u5e02",
            1396: "\u8944\u9633\u5e02",
            1405: "\u5341\u5830\u5e02",
            1413: "\u8346\u5dde\u5e02",
            1421: "\u5b9c\u660c\u5e02",
            2922: "\u6f5c\u6c5f\u5e02",
            2980: "\u5929\u95e8\u5e02",
            2983: "\u4ed9\u6843\u5e02"
        },
        18: {
            4250: "\u8012\u9633\u5e02",
            1482: "\u957f\u6c99\u5e02",
            1488: "\u682a\u6d32\u5e02",
            1495: "\u6e58\u6f6d\u5e02",
            1501: "\u8861\u9633\u5e02",
            1511: "\u90b5\u9633\u5e02",
            1522: "\u5cb3\u9633\u5e02",
            1530: "\u5e38\u5fb7\u5e02",
            1540: "\u5f20\u5bb6\u754c\u5e02",
            1544: "\u90f4\u5dde\u5e02",
            1555: "\u76ca\u9633\u5e02",
            1560: "\u6c38\u5dde\u5e02",
            1574: "\u6000\u5316\u5e02",
            1586: "\u5a04\u5e95\u5e02",
            1592: "\u6e58\u897f\u5dde"
        },
        19: {
            1601: "\u5e7f\u5dde\u5e02",
            1607: "\u6df1\u5733\u5e02",
            1609: "\u73e0\u6d77\u5e02",
            1611: "\u6c55\u5934\u5e02",
            1617: "\u97f6\u5173\u5e02",
            1627: "\u6cb3\u6e90\u5e02",
            1634: "\u6885\u5dde\u5e02",
            1709: "\u63ed\u9633\u5e02",
            1643: "\u60e0\u5dde\u5e02",
            1650: "\u6c55\u5c3e\u5e02",
            1655: "\u4e1c\u839e\u5e02",
            1657: "\u4e2d\u5c71\u5e02",
            1659: "\u6c5f\u95e8\u5e02",
            1666: "\u4f5b\u5c71\u5e02",
            1672: "\u9633\u6c5f\u5e02",
            1677: "\u6e5b\u6c5f\u5e02",
            1684: "\u8302\u540d\u5e02",
            1690: "\u8087\u5e86\u5e02",
            1698: "\u4e91\u6d6e\u5e02",
            1704: "\u6e05\u8fdc\u5e02",
            1705: "\u6f6e\u5dde\u5e02"
        },
        20: {
            3168: "\u5d07\u5de6\u5e02",
            1715: "\u5357\u5b81\u5e02",
            1720: "\u67f3\u5dde\u5e02",
            1726: "\u6842\u6797\u5e02",
            1740: "\u68a7\u5dde\u5e02",
            1746: "\u5317\u6d77\u5e02",
            1749: "\u9632\u57ce\u6e2f\u5e02",
            1753: "\u94a6\u5dde\u5e02",
            1757: "\u8d35\u6e2f\u5e02",
            1761: "\u7389\u6797\u5e02",
            1792: "\u8d3a\u5dde\u5e02",
            1806: "\u767e\u8272\u5e02",
            1818: "\u6cb3\u6c60\u5e02",
            3044: "\u6765\u5bbe\u5e02"
        },
        21: {
            1827: "\u5357\u660c\u5e02",
            1832: "\u666f\u5fb7\u9547\u5e02",
            1836: "\u840d\u4e61\u5e02",
            1842: "\u65b0\u4f59\u5e02",
            1845: "\u4e5d\u6c5f\u5e02",
            1857: "\u9e70\u6f6d\u5e02",
            1861: "\u4e0a\u9976\u5e02",
            1874: "\u5b9c\u6625\u5e02",
            1885: "\u629a\u5dde\u5e02",
            1898: "\u5409\u5b89\u5e02",
            1911: "\u8d63\u5dde\u5e02"
        },
        22: {
            2103: "\u51c9\u5c71\u5dde",
            1930: "\u6210\u90fd\u5e02",
            1946: "\u81ea\u8d21\u5e02",
            1950: "\u6500\u679d\u82b1\u5e02",
            1954: "\u6cf8\u5dde\u5e02",
            1960: "\u7ef5\u9633\u5e02",
            1962: "\u5fb7\u9633\u5e02",
            1977: "\u5e7f\u5143\u5e02",
            1983: "\u9042\u5b81\u5e02",
            1988: "\u5185\u6c5f\u5e02",
            1993: "\u4e50\u5c71\u5e02",
            2005: "\u5b9c\u5bbe\u5e02",
            2016: "\u5e7f\u5b89\u5e02",
            2022: "\u5357\u5145\u5e02",
            2033: "\u8fbe\u5dde\u5e02",
            2042: "\u5df4\u4e2d\u5e02",
            2047: "\u96c5\u5b89\u5e02",
            2058: "\u7709\u5c71\u5e02",
            2065: "\u8d44\u9633\u5e02",
            2070: "\u963f\u575d\u5dde",
            2084: "\u7518\u5b5c\u5dde"
        },
        23: {
            3690: "\u4e09\u4e9a\u5e02",
            3698: "\u6587\u660c\u5e02",
            3699: "\u4e94\u6307\u5c71\u5e02",
            3701: "\u4e34\u9ad8\u53bf",
            3702: "\u6f84\u8fc8\u53bf",
            3703: "\u5b9a\u5b89\u53bf",
            3704: "\u5c6f\u660c\u53bf",
            3705: "\u660c\u6c5f\u53bf",
            3706: "\u767d\u6c99\u53bf",
            3707: "\u743c\u4e2d\u53bf",
            3708: "\u9675\u6c34\u53bf",
            3709: "\u4fdd\u4ead\u53bf",
            3710: "\u4e50\u4e1c\u53bf",
            3711: "\u4e09\u6c99\u5e02",
            2121: "\u6d77\u53e3\u5e02",
            3115: "\u743c\u6d77\u5e02",
            3137: "\u4e07\u5b81\u5e02",
            3173: "\u4e1c\u65b9\u5e02",
            3034: "\u510b\u5dde\u5e02"
        },
        24: {
            2144: "\u8d35\u9633\u5e02",
            2150: "\u516d\u76d8\u6c34\u5e02",
            2155: "\u9075\u4e49\u5e02",
            2169: "\u94dc\u4ec1\u5e02",
            2180: "\u6bd5\u8282\u5e02",
            2189: "\u5b89\u987a\u5e02",
            2196: "\u9ed4\u897f\u5357\u5dde",
            2205: "\u9ed4\u4e1c\u5357\u5dde",
            2222: "\u9ed4\u5357\u5dde"
        },
        25: {
            4108: "\u8fea\u5e86\u5dde",
            2235: "\u6606\u660e\u5e02",
            2247: "\u66f2\u9756\u5e02",
            2258: "\u7389\u6eaa\u5e02",
            2270: "\u662d\u901a\u5e02",
            2281: "\u666e\u6d31\u5e02",
            2291: "\u4e34\u6ca7\u5e02",
            2298: "\u4fdd\u5c71\u5e02",
            2304: "\u4e3d\u6c5f\u5e02",
            2309: "\u6587\u5c71\u5dde",
            2318: "\u7ea2\u6cb3\u5dde",
            2332: "\u897f\u53cc\u7248\u7eb3\u5dde",
            2336: "\u695a\u96c4\u5dde",
            2347: "\u5927\u7406\u5dde",
            2360: "\u5fb7\u5b8f\u5dde",
            2366: "\u6012\u6c5f\u5dde"
        },
        26: {
            3970: "\u963f\u91cc\u5730\u533a",
            3971: "\u6797\u829d\u5730\u533a",
            2951: "\u62c9\u8428\u5e02",
            3107: "\u90a3\u66f2\u5730\u533a",
            3129: "\u5c71\u5357\u5730\u533a",
            3138: "\u660c\u90fd\u5730\u533a",
            3144: "\u65e5\u5580\u5219\u5730\u533a"
        },
        27: {
            2428: "\u5ef6\u5b89\u5e02",
            2442: "\u6c49\u4e2d\u5e02",
            2454: "\u6986\u6797\u5e02",
            2468: "\u5546\u6d1b\u5e02",
            2476: "\u5b89\u5eb7\u5e02",
            2376: "\u897f\u5b89\u5e02",
            2386: "\u94dc\u5ddd\u5e02",
            2390: "\u5b9d\u9e21\u5e02",
            2402: "\u54b8\u9633\u5e02",
            2416: "\u6e2d\u5357\u5e02"
        },
        28: {
            2525: "\u5e86\u9633\u5e02",
            2534: "\u9647\u5357\u5e02",
            2544: "\u6b66\u5a01\u5e02",
            2549: "\u5f20\u6396\u5e02",
            2556: "\u9152\u6cc9\u5e02",
            2564: "\u7518\u5357\u5dde",
            2573: "\u4e34\u590f\u5dde",
            3080: "\u5b9a\u897f\u5e02",
            2487: "\u5170\u5dde\u5e02",
            2492: "\u91d1\u660c\u5e02",
            2495: "\u767d\u94f6\u5e02",
            2501: "\u5929\u6c34\u5e02",
            2509: "\u5609\u5cea\u5173\u5e02",
            2518: "\u5e73\u51c9\u5e02"
        },
        29: {
            2580: "\u897f\u5b81\u5e02",
            2585: "\u6d77\u4e1c\u5730\u533a",
            2592: "\u6d77\u5317\u5dde",
            2597: "\u9ec4\u5357\u5dde",
            2603: "\u6d77\u5357\u5dde",
            2605: "\u679c\u6d1b\u5dde",
            2612: "\u7389\u6811\u5dde",
            2620: "\u6d77\u897f\u5dde"
        },
        30: {
            2628: "\u94f6\u5ddd\u5e02",
            2632: "\u77f3\u5634\u5c71\u5e02",
            2637: "\u5434\u5fe0\u5e02",
            2644: "\u56fa\u539f\u5e02",
            3071: "\u4e2d\u536b\u5e02"
        },
        31: {
            4110: "\u4e94\u5bb6\u6e20\u5e02",
            4163: "\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde\u963f\u62c9\u5c71\u53e3\u53e3\u5cb8",
            15945: "\u963f\u62c9\u5c14\u5e02",
            15946: "\u56fe\u6728\u8212\u514b\u5e02",
            2652: "\u4e4c\u9c81\u6728\u9f50\u5e02",
            2654: "\u514b\u62c9\u739b\u4f9d\u5e02",
            2656: "\u77f3\u6cb3\u5b50\u5e02",
            2658: "\u5410\u9c81\u756a\u5730\u533a",
            2662: "\u54c8\u5bc6\u5730\u533a",
            2666: "\u548c\u7530\u5730\u533a",
            2675: "\u963f\u514b\u82cf\u5730\u533a",
            2686: "\u5580\u4ec0\u5730\u533a",
            2699: "\u514b\u5b5c\u52d2\u82cf\u5dde",
            2704: "\u5df4\u97f3\u90ed\u695e\u5dde",
            2714: "\u660c\u5409\u5dde",
            2723: "\u535a\u5c14\u5854\u62c9\u5dde",
            2727: "\u4f0a\u7281\u5dde",
            2736: "\u5854\u57ce\u5730\u533a",
            2744: "\u963f\u52d2\u6cf0\u5730\u533a"
        },
        32: {2768: "\u53f0\u6e7e\u5e02"},
        52993: {
            52994: "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a",
            52995: "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a"
        },
        84: {1310: "\u9493\u9c7c\u5c9b"}
    }, Array.prototype.unique = function () {
        for (var e = [], t = {}, a = 0, i = this.length; a < i; a++) t[this[a]] || (e.push(this[a]), t[this[a]] = 1);
        return e
    };
    var e = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
        t = function (e, t) {
            t = (((t || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
            var a = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, i = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return e.replace(i, "").replace(a, function (e, a) {
                return t.indexOf("<" + a.toLowerCase() + ">") > -1 ? e : ""
            })
        }, a = function (e, t) {
            var a = new RegExp("(^|\\?|&)" + e + "=([^&]*)(\\s|&|$)", "i"), i = t || window.location.search;
            return a.test(i) ? RegExp.$2 : ""
        }, i = function (e, t, a) {
            var s, o, n;
            switch (arguments.length) {
                case 0:
                    return "";
                case 1:
                    s = window.location.pathname + window.location.search, o = e, n = "";
                    break;
                case 2:
                    s = e, o = t, n = "";
                    break;
                case 3:
                    s = e, o = t, n = a
            }
            if ("string" == typeof o && "string" == typeof n) {
                var r = new RegExp("(^|\\?|&)" + o + "=([^&#]*)", "gi");
                if (n) if (r.test(s)) s = s.replace(r, "$1" + o + "=" + n); else {
                    var c = s.indexOf("#"), l = "";
                    -1 != c && (l = s.substr(c), s = s.substr(0, c)), s = s + "&" + o + "=" + n + l
                } else s = s.replace(r, "")
            } else if (o instanceof Array && "string" == typeof n) for (var d = 0, p = o.length; d < p; d++) s = i(s, o[d], n); else if (o instanceof Array && n instanceof Array && o.length == n.length) for (var d = 0, p = o.length; d < p; d++) s = i(s, o[d], n[d]); else s = !1;
            return s
        }, s = function (e, t, a) {
            $(e).unbind("click").bind("click", function (e) {
                var s = $(e.target), o = s.attr("href");
                if (o || (s = s.closest("a"), o = s.attr("href")), o && "javascript:;" != o) return window.location.href = i(o, t, a), !1
            })
        }, o = function (e) {
            return e ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0*39;/g, "'") : ""
        }, n = function (e, t) {
            return "object" != typeof t ? "" : e.replace(/{#(.*?)#}/g, function () {
                var e = arguments[1];
                return void 0 !== t[e] && null != t[e] ? t[e] : ""
            })
        }, r = function (e, t, a) {
            return a = a || "n7/", "//img1" + e % 5 + ".360buyimg.com/" + a + t
        }, c = function () {
            self == top ? window.scrollTo(0, $("#J_main").offset().top) : window.parent.scrollTo(0, $("#J_main").offset().top + 233)
        }, l = function (e, t) {
            var a = 0, i = function () {
                if (++a > 100) return !1;
                "object" == typeof JA && "object" == typeof JA.tracker && "function" == typeof JA.tracker.ngloader ? JA.tracker.ngloader(e, t) : setTimeout(i, 50)
            };
            i()
        }, d = function (e) {
            seajs.use(["jdf/1.0.0/unit/login/1.0.0/login.js"], function (t) {
                t({
                    clstag1: "login|keycount|5|3", clstag2: "login|keycount|5|4", modal: !0, complete: function () {
                        "function" == typeof e && e()
                    }
                })
            })
        }, p = {
            pop: function (e) {
                return e >= 1000000001 && e <= 1999999999 || e >= 10000000001 && e <= 99999999999 || e >= 200000000001 && e <= 209999999999
            }, book: function (e) {
                return e >= 10000001 && e <= 19999999 || e >= 110000000001 && e <= 139999999999
            }, mvd: function (e) {
                return e >= 20000001 && e <= 29999999 || e >= 140000000001 && e <= 149999999999
            }
        }, u = function () {
            var e = /^(https:)?\/\/(.*)\.(jd|360buy)\.com/i, t = [];
            return $(".J_oneBoxFrame").each(function () {
                var a, i = $(this).attr("src") || $(this).attr("data-src");
                e.test(i) ? (a = RegExp.$2, "life" == a && i.indexOf("initRestaurant") > -1 ? a = "dingzuo" : "life" == a && i.indexOf("initTakeOut") > -1 && (a = "waimai"), t.push(a)) : i.indexOf("//api.jd.yiche.com") > -1 && t.push("yiche")
            }), t.join("$")
        }, f = function (e, t) {
            var a = "//gw.e.jd.com/downrecord/downrecord_insert.action?ebookId=" + e + "&key=" + t + "&callback=?";
            $.getJSON(a, function (e) {
                1 == e.code ? window.seajs.use(["jdf/1.0.0/ui/dialog/1.0.0/dialog"], function (e) {
                    $("body").dialog({
                        title: "\u4e0b\u8f7d",
                        hasButton: !0,
                        source: "\u5982\u60a8\u5df2\u5b89\u88c5\u4eac\u4e1cLeBook\u5ba2\u6237\u7aef\uff0c\u8bf7\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u81ea\u52a8\u542f\u52a8\u5ba2\u6237\u7aef<br /><br />\u5982\u60a8\u5c1a\u672a\u5b89\u88c5\u4eac\u4e1cLeBook\u5ba2\u6237\u7aef\uff0c\u8bf7\u70b9\u51fb\u201c\u53d6\u6d88\u201d\u5c06\u5f15\u5bfc\u60a8\u514d\u8d39\u5b89\u88c5\u5ba2\u6237\u7aef",
                        submitButton: "\u786e\u5b9a",
                        cancelButton: "\u53d6\u6d88",
                        onSubmit: function () {
                            $(".ui-dialog, .ui-mask").remove(), window.location = "LEBK:///Bought"
                        },
                        onCancel: function () {
                            $(".ui-mask").remove(), $("body").dialog({
                                title: "\u4e0b\u8f7d",
                                hasButton: !0,
                                source: "\u662f\u5426\u5b89\u88c5\uff1f",
                                submitButton: "\u786e\u5b9a",
                                cancelButton: "\u53d6\u6d88",
                                onSubmit: function () {
                                    $(".ui-dialog, .ui-mask").remove(), window.open("//e.jd.com/ebook/lebook_pc.aspx")
                                }
                            })
                        }
                    })
                }) : alert(e.message)
            })
        }, h = function (e, t) {
            window.seajs.use(["jdf/1.0.0/ui/dialog/1.0.0/dialog", "./script/digital_music_download_new"], function (a, i) {
                $("body").dialog({
                    title: "\u4e0b\u8f7d",
                    hasButton: !0,
                    source: "\u5982\u60a8\u5df2\u5b89\u88c5\u4eac\u4e1cLeMusic\u5ba2\u6237\u7aef\uff0c\u8bf7\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u81ea\u52a8\u542f\u52a8\u5ba2\u6237\u7aef<br /><br />\u5982\u60a8\u5c1a\u672a\u5b89\u88c5\u4eac\u4e1cLeMusic\u5ba2\u6237\u7aef\uff0c\u8bf7\u70b9\u51fb\u201c\u53d6\u6d88\u201d\u5c06\u5f15\u5bfc\u60a8\u514d\u8d39\u5b89\u88c5\u5ba2\u6237\u7aef",
                    submitButton: "\u786e\u5b9a",
                    cancelButton: "\u53d6\u6d88",
                    onSubmit: function () {
                        $(".ui-dialog, .ui-mask").remove();
                        var a = i.getProductType(t),
                            s = "[a]user=" + e + "&productid=" + t + "&obtain=purchase&charset=gb2312&type=" + a + "[z]";
                        window.location = "LeMusic://" + i.encode64(s)
                    },
                    onCancel: function () {
                        $(".ui-mask").remove(), $("body").dialog({
                            title: "\u4e0b\u8f7d",
                            hasButton: !0,
                            source: "\u662f\u5426\u5b89\u88c5\uff1f",
                            submitButton: "\u786e\u5b9a",
                            cancelButton: "\u53d6\u6d88",
                            onSubmit: function () {
                                $(".ui-dialog, .ui-mask").remove(), window.open("//app.music.jd.com/client_download.action")
                            }
                        })
                    }
                })
            })
        }, m = function () {
            $("#J_oneboxTabs").find("a").click(function () {
                if (!$(this).hasClass("selected")) {
                    var e = $(this).index(),
                        t = $(".onebox-tab-cnt").addClass("hide").eq(e).removeClass("hide").find(".J_oneBoxFrame"),
                        a = t.attr("data-src");
                    a && t.removeAttr("data-src").attr("src", a), $(this).addClass("selected").siblings().removeClass("selected")
                }
            })
        }, g = function (e) {
            var t = location.pathname.match(/pinpai\/([12]-)?(\d+-)?(\d+)\.html$/),
                a = location.pathname.match(/(writer|publish)\/(.+?)_\d+\.html$/);
            return t ? e = e ? i(e, "brand_id", t[3]) : "brand_id=" + t[3] + (t[1] && t[2] ? "&cid" + t[1].replace("-", "") + "=" + t[2].replace("-", "") : t[2] ? "&cid3=" + t[2].replace("-", "") : "") : a && (e = i(e, ["keyword", "enc"], [$.browser.msie ? encodeURIComponent(decodeURIComponent(a[2])) : a[2], "utf-8"])), e
        }, _ = function (t) {
            e ? (window.history.pushState({}, "", window.location.pathname + "?" + t), SEARCH.load("s_new.php?" + g(t))) : window.location.hash = t
        }, v = function (e, t, a) {
            var a = a || ".J-picon-fix", i = e.find(a);
            i.length ? i.last().after(t) : e.prepend(t)
        };
    !function () {
        QUERY_KEYWORD = o(window.QUERY_KEYWORD), REAL_KEYWORD = o(window.REAL_KEYWORD), $("#key").val(QUERY_KEYWORD), "undefined" == typeof LogParm && (LogParm = {
            ab: "0000",
            result_count: 0
        }), LogParm.rec_type = LogParm.rec_type || "0", LogParm.ev = LogParm.ev || 0, LogParm.cid = LogParm.cid || "", LogParm.psort = LogParm.psort || "", LogParm.page = LogParm.page || "1", LogParm.sig = LogParm.sig || "", LogParm.rel_cat2 = LogParm.rel_cat2 || "", LogParm.rel_cat3 = LogParm.rel_cat3 || "", LogParm.log_id = LogParm.log_id || "", LogParm.expand = LogParm.expand || "", LogParm.mtest = LogParm.mtest || ""
    }(), window.searchlog = a("forcebot") ? function () {
    } : function () {
        var e, t, a = Array.prototype.slice.call(arguments, 0),
            i = a.length > 4 && 1 == a[0] && (52 == a[3] || 62 == a[3]) ? a.splice(4, 1, "")[0] : "";
        "e" == a[0] ? (t = LogParm.ekey, a.shift(), a.splice(4, 1, QUERY_KEYWORD)) : 1 == a[0] && window.REAL_KEYWORD ? (t = window.REAL_KEYWORD, window.REAL_KEYWORD != QUERY_KEYWORD && a.splice(4, 1, QUERY_KEYWORD)) : (t = window.QUERY_KEYWORD, 0 == a[0] && window.REAL_KEYWORD && REAL_KEYWORD != QUERY_KEYWORD && a.splice(1, 1, REAL_KEYWORD));
        var s = a.length, o = "",
            n = encodeURIComponent(t) + "^#psort#^#page#^#cid#^" + encodeURIComponent(window.location.href), r = {
                keyword: t,
                ev: LogParm.ev,
                ab: LogParm.ab,
                mtest: LogParm.mtest,
                rel_ver: readCookie("rkv") || "",
                sig: LogParm.sig,
                rel_cat2: LogParm.rel_cat2,
                rel_cat3: LogParm.rel_cat3,
                logid: LogParm.log_id,
                loc: readCookie("ipLoc-djd") || "",
                referer: document.referrer,
                anchor: window.location.hash.substr(1)
            };
        if (s > 0) {
            if (0 == a[0]) r.front_cost = LogParm.front_cost = LogParm.front_cost || "0", r.back_cost = LogParm.back_cost = LogParm.back_cost || "0", r.ip = LogParm.ip = LogParm.ip || "", r.rec_type = LogParm.rec_type, r.result_count = LogParm.result_count, r.word = a[1] || LogParm.word || "", e = "//sstat.jd.com/scslog?args=" + LogParm.rec_type + "^" + n + "^^^" + LogParm.result_count + "^" + a[1] + "^" + LogParm.ev + "^" + LogParm.ab + "^" + LogParm.back_cost + "^" + LogParm.front_cost + "^" + LogParm.ip, e += "^" + encodeURIComponent(document.referrer), o += LogParm.expand; else if (1 == a[0]) {
                10 != LogParm.rec_type ? (e = "//sstat.jd.com/scslog?args=1^" + n + "^", r.rec_type = 1) : (e = "//sstat.jd.com/scslog?args=11^" + n + "^", r.rec_type = 11);
                for (var c = 1, d = Math.min(5, s); c < d; c++) e += encodeURI(a[c]) + "^";
                if (s > 3) switch (parseInt(a[3])) {
                    case 51:
                        LogParm.cid = a[1];
                        break;
                    case 55:
                        LogParm.psort = a[1];
                        break;
                    case 56:
                        LogParm.page = a[1];
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 81:
                    case 82:
                    case 83:
                        r.bhv = window.__behaivor__.getBehavior(String(a[1]), window.event || arguments.callee.caller.arguments[0]);
                    default:
                        r.wid = a[1]
                }
                s >= 5 && (r.word = a[4]), i && (r.rel_key = i), r.pos = a[2], r.type = a[3];
                for (var c = 0, d = 5 - s; c < d; c++) e += "^";
                e += LogParm.ev + "^" + LogParm.ab, e += "^^^^" + encodeURIComponent(document.referrer), o += s >= 6 && "" != a[5] ? LogParm.expand + "$" + a[5] : LogParm.expand
            }
            e = e.replace("#cid#", LogParm.cid).replace("#psort#", LogParm.psort).replace("#page#", LogParm.page), e += "^" + LogParm.rel_cat2 + "^" + LogParm.rel_cat3 + "^" + LogParm.log_id + "^" + encodeURIComponent(o) + "^" + encodeURIComponent(LogParm.mtest), $.getScript(e + "&sig=" + encodeURIComponent(LogParm.sig)), r.cid = LogParm.cid, r.sort = LogParm.psort, r.page = LogParm.page, o = o.split("$");
            for (var p, c = 0, s = o.length; c < s; c++) (p = o[c].indexOf("=")) > 0 && (r[o[c].substr(0, p)] = o[c].substr(p + 1));
            l("search.000001", r)
        }
    }, window.call_free_download = function (e, t) {
        if (e && t) d(function () {
            f(e, t)
        }); else if (e && !t) {
            var a = readCookie("pin");
            a && d(function () {
                h(a, e)
            })
        }
    }, searchUnit.userActionOnebox = function (e) {
        var t, a;
        switch (parseInt(e)) {
            case 1:
                t = "chongzhi", a = "order=1";
                break;
            case 2:
                t = "liuliang", a = "order=1";
                break;
            case 3:
                t = "jipiao", a = "order=0$foreign=0";
                break;
            case 4:
                t = "jipiao", a = "order=1";
                break;
            case 5:
                t = "jipiao", a = "order=0$foreign=1";
                break;
            case 6:
                t = "caipiao", a = "order=1";
                break;
            case 7:
                t = "caipiao", a = "order=0";
                break;
            case 8:
                t = "card", a = "order=1";
                break;
            case 9:
                t = "card", a = "order=0";
                break;
            default:
                t = "", a = ""
        }
        t && a && searchlog(1, 0, 0, 59, t, a)
    }, searchUnit.pageLoad = function (e, t) {
        return window.location.href = "//search.jd.com/Search?keyword=" + encodeURIComponent(QUERY_KEYWORD) + "&enc=utf-8&qrst=1&accy_id=" + encodeURIComponent(e) + "&car_id=" + t, !1
    }, searchUnit.shopFocus = function (e, t, a) {
        var i = a ? window.frames.shop_list.document : document;
        "do" == t ? d(function () {
            $.getJSON("//follow-soa.jd.com/vender/follow?venderId=" + e + "&callback=?", function (t) {
                "object" == typeof t && (t.data || "F0402" == t.code) && $("#J_shop_focus_" + e, i).addClass("z-focused").mouseenter(function () {
                    $(this).addClass("z-focus-cancle").find("em").html("\u53d6\u6d88")
                }).mouseleave(function () {
                    $(this).removeClass("z-focus-cancle").find("em").html("\u5df2\u5173\u6ce8")
                }).find("em").html("\u5df2\u5173\u6ce8")
            })
        }) : "undo" == t ? d(function () {
            window.seajs.use(["jdf/1.0.0/ui/dialog/1.0.0/dialog"], function (t) {
                $("body").dialog({
                    title: "\u5173\u6ce8",
                    hasButton: !0,
                    fixed: !0,
                    width: 384,
                    extendMainClass: "dialog-confirm",
                    source: '<div class="m-tipbox2"><div class="tip-inner tip-warn"><div class="tip-title"><i class="tip-icon"></i><div class="title-main">\u662f\u5426\u53d6\u6d88\u5173\u6ce8\u8be5\u54c1\u724c\u5e97\u94fa\uff1f</div></div></div></div>',
                    submitButton: "\u786e\u5b9a",
                    cancelButton: "\u53d6\u6d88",
                    onSubmit: function () {
                        $(".ui-dialog,.ui-mask").remove(), $.getJSON("//follow-soa.jd.com/vender/unfollow?venderId=" + e + "&callback=?", function (t) {
                            "object" == typeof t && 1 == t.data && $("#J_shop_focus_" + e, i).removeClass("z-focused z-focus-cancle").unbind("mouseenter mouseleave").find("em").html("\u52a0\u5173\u6ce8")
                        })
                    },
                    onCancel: function () {
                        $(".ui-dialog,.ui-mask").remove()
                    }
                })
            })
        }) : "check" == t && $.getJSON("//follow-soa.jd.com/vender/batchIsFollow?venderIds=" + e + "&callback=?", function (e) {
            if ("object" == typeof e && "object" == typeof e.data && e.success) for (var t in e.data) e.data[t] && $("#J_shop_focus_" + t, i).addClass("z-focused").mouseenter(function () {
                $(this).addClass("z-focus-cancle").find("em").html("\u53d6\u6d88")
            }).mouseleave(function () {
                $(this).removeClass("z-focus-cancle").find("em").html("\u5df2\u5173\u6ce8")
            }).find("em").html("\u5df2\u5173\u6ce8")
        })
    }, SEARCH.sync_iframe_height = function () {
        self != top && "object" == typeof parent.searchUnit && "function" == typeof parent.searchUnit.resizeOnebox && parent.searchUnit.resizeOnebox($(document.body).height() - 10, "promotion", function () {
            pageConfig.FN_ImgError(document), $("#J_main").lazyload({
                type: "img",
                placeholderClass: "err-product",
                delay: 20,
                space: 200
            })
        })
    }, SEARCH.relate_search = {
        init: function () {
            var e = QUERY_KEYWORD, t = this, i = LogParm.ab, s = 9 == pageConfig.searchType;
            e && "search.jd.com" == location.hostname ? $.ajax({
                url: "//qpsearch.jd.com/relationalSearch?keyword=" + encodeURIComponent(e).toLocaleLowerCase() + "&ver=" + (a("rel_ver") || "auto") + "&client=" + (s ? "cs" : "pc"),
                async: !0,
                scriptCharset: "utf-8",
                dataType: "jsonp",
                success: function (e) {
                    t.callback(e, !0, i, s)
                }
            }) : t.callback("", !1, i, s)
        }, callback: function (e, t, a, i) {
            for (var e = "string" == typeof e ? e : "", s = e.indexOf("^^"), o = s > -1 ? e.substr(0, s) : "", n = e.substr(s > -1 ? s + 2 : 0).replace(/\*$/, "").split("*"), r = [], c = "", d = 0, p = n.length; d < p; d++) "" != n[d] && r.push(n[d]);
            for (var d = 0, p = r.length; d < p; d++) {
                var u = r[d], f = 0 == d ? ' class="fore"' : "", h = d == p - 1 ? "" : "<b>|</b>";
                c += '<a onclick="searchlog(1,0,' + d + ",#{type},'" + u + '\')" href="Search?keyword=' + encodeURIComponent(u) + "&enc=utf-8" + (i ? "&market=1" : "") + "&spm=2.1." + d + '"' + f + ">" + u + "</a>" + h
            }
            c ? ($("#hotwords").html(c.replace(/#{type}/g, 52)), $(".search-ext .fg-line-value").html(c.replace(/#{type}/g, 62))) : ($.ajax({
                url: "//dc.3.cn/cathot/get2",
                dataType: "jsonp",
                scriptCharset: "gbk",
                success: function (e) {
                    if ("object" == typeof e && e.data) {
                        for (var t, a = 0, i = Math.min(e.data.length, 8), s = ""; a < i; a++) t = e.data[a], t.n && t.u && (s += '<a href="' + t.u + '" target="_blank"' + (0 == a ? ' style="color:#f30213;"' : "") + ">" + t.n + "</a><b>|</b>");
                        $("#hotwords").html(s.substr(0, s.length - 8))
                    }
                }
            }), $(".search-ext").hide()), $("#hotwords").addClass("haveline"), $("#key").addClass("blurcolor").bind("focus", function () {
                $(this).addClass("defcolor").removeClass("blurcolor")
            }).bind("blur", function () {
                $(this).addClass("blurcolor").removeClass("defcolor")
            }), t && (l("search.000008", {
                keyword: QUERY_KEYWORD,
                ab: a,
                from: o,
                num: p,
                word: r.join("*")
            }), document.cookie = "rkv=" + o + ";path=/;domain=.search.jd.com")
        }
    }, SEARCH.get_shop_info = function () {
        var e = [];
        $("span.m-focus").not('[data-done="1"]').each(function () {
            this.setAttribute("data-done", "1"), e.push(this.getAttribute("data-shopid"))
        }), e.length && $.getJSON("shop_new.php?ids=" + e.join(","), function (e) {
            if ("object" == typeof e && e.length) for (var t, a, i, s = 0, o = e.length; s < o; s++) t = $("#J_shop_focus_" + e[s].shop_id).parent().parent().parent(), a = "", i = e[s].shop_brief || e[s].summary, t.find("img").attr("src", e[s].shop_logo ? e[s].shop_logo : "//misc.360buyimg.com/product/search/0.0.9/css/i/shop-def.png").removeClass(), t.find(".shop-name a").html(e[s].shop_name), t.find(".shop-infor").eq(0).html("\u4e3b\u8425\u54c1\u724c\uff1a" + e[s].main_brand).next().html(i ? "\u5e97\u94fa\u7b80\u4ecb\uff1a" + i : ""), 1 == e[s].icon && (a += '<a class="shop-tag-img" title="\u4eac\u4e1c\u54c1\u8d28\u8ba4\u8bc1\u5546\u5bb6"><img src="//img11.360buyimg.com/uba/jfs/t3319/144/278979502/1525/f89d43fe/580484b5Ncf61e7b9.png" alt="\u54c1\u8d28\u8ba4\u8bc1" width="72" height="18"></a>'), 1 == e[s].vender_type && (a += '<em class="shop-act-tag tag-jd">\u4eac\u4e1c\u81ea\u8425</em>'), a && t.find(".shop-name").append(a), 0 == e[s].vender_total_score ? t.find(".J_total_score").html("-") : t.find(".J_total_score").html(e[s].vender_total_score / 100), 0 == e[s].vender_ware_score ? t.find(".J_ware_score").html("-") : t.find(".J_ware_score").html(e[s].vender_ware_score / 100).after(e[s].vender_ware_score >= e[s].industry_total_score ? '<i class="i-up"></i>' : '<i class="i-down"></i>'), 0 == e[s].vender_service_score ? t.find(".J_service_score").html("-") : t.find(".J_service_score").html(e[s].vender_service_score / 100).after(e[s].vender_service_score >= e[s].industry_service_score ? '<i class="i-up"></i>' : '<i class="i-down"></i>'), 0 == e[s].vender_effective_score ? t.find(".J_effective_score").html("-") : t.find(".J_effective_score").html(e[s].vender_effective_score / 100).after(e[s].vender_effective_score >= e[s].industry_effective_score ? '<i class="i-up"></i>' : '<i class="i-down"></i>'), t.find(".m-focus").click(function () {
                searchUnit.shopFocus($(this).attr("data-shopid"), $(this).hasClass("z-focused") ? "undo" : "do", 0)
            })
        }), e.length && searchUnit.shopFocus(e.join(","), "check", 0)
    }, SEARCH.get_digital_price = function (e, a) {
        this.enable_price && seajs.use("product/module/tools", function (i) {
            i.getPrice(e.replace(/J_/g, "").split(","), pageConfig.price_pdos_off, function (e) {
                if ("object" == typeof e) for (var i = 0, s = e.length, o = ""; i < s; i++) o = e[i].p < 0 ? "<i>\u6682\u65e0\u62a5\u4ef7</i>" : 0 == e[i].p ? "<i>\u514d\u8d39</i>" : "<em>\uffe5</em><i>" + e[i].p + "</i>", a ? $("em." + e[i].id).html(t(o)) : $("strong." + e[i].id).html(o)
            }, {ext: "11", pin: decodeURIComponent(readCookie("pin") || "")})
        })
    }, SEARCH.get_ware_stock = function (e, t, a) {
        function i(e, a) {
            for (var i, s, n, r, c, l = $("#J_main").find("a[data-stock]"), f = [], h = 0, m = l.length; h < m; h++) i = l.eq(h), s = i.attr("data-stock"), n = e[s], r = p.book(s) || p.mvd(s), ("sku" == a || n) && i.removeAttr("data-stock"), "sku" == a && 34 == i.attr("data-sv") ? (("1" == t || "2" == t) && i.hasClass("J_notification") && r && f.push(s), 3 == t && d && (c = i.closest("li").attr("data-spu")) && u.push(c) && i.attr("data-stock", c)) : "spu" == a && n && 34 == n.a && i.parent().siblings(".p-stock").css("display", "block");
            "sku" == a && (u.length && o(u, "spu", 5), f.length && $.getJSON("coupon.php?type=sale&sku=" + f.join(","), function (e) {
                if ("object" == typeof e) for (var a in e) 0 == e[a] && ("2" == t ? $("#J_store_" + a).replaceWith('<a class="p-o-btn addcart disabled"><i></i>\u52a0\u5165\u8d2d\u7269\u8f66</a>') : $("#J_store_" + a).before('<a href="javascript:;" class="' + ("1" == t ? "p-o-btn addcart disabled" : "disabled") + '"><i></i>\u52a0\u5165\u8d2d\u7269\u8f66</a>').remove())
            }))
        }

        function s(e) {
            if (!e || "object" != typeof e || "function" != typeof a) return !1;
            var t = c[0] ? window.json_city[0][c[0]] : "", i = [];
            for (var s in e) {
                var o = 1 == e[s].u ? 33 : parseInt(e[s].a);
                0 != o && 18 != o && 34 != o || i.push(s)
            }
            a(i, t)
        }

        function o(e, a, o) {
            do {
                $.ajax({
                    url: "//ss.3.cn/ss/" + ("sku" == a ? "areaStockState" : "areaStockSpuState") + "/mget?app=search_pc&ch=1&" + ("sku" == a ? "skuNum" : "spuNum") + "=" + e.splice(0, o).join(";") + "&area=" + l.replace(/-/g, ",") + "&pduid=" + n + "&pdpin=" + r,
                    async: !0,
                    dataType: "jsonp",
                    success: function (e) {
                        -1 == t ? s(e) : i(e, a)
                    }
                })
            } while (e.length)
        }

        if (this.enable_stock) {
            var n = readCookie("__jda"), n = n && n.indexOf(".") > -1 ? n.split(".")[1] : "",
                r = readCookie("pin") || "", c = (readCookie("ipLoc-djd") || "").replace(/\..*$/, "").split("-"),
                l = c.slice(0, 4).join("-"), d = 2 == this.enable_stock, u = [];
            e = -1 != t && e ? e.substr(2).split(",J_") : e, e ? o(e, "sku", 30) : i([], "sku")
        }
    }, SEARCH.get_icon_info = function () {
        var e = [], t = [], a = {}, i = [], s = [], o = {}, n = {},
            r = $("#J_goodsList").find(".p-img div[data-catid]").not('[data-done="1"]'),
            c = $("#J_goodsList").find(".ps-main img[data-sku]").not('[data-done="1"]');
        if (r.each(function () {
                var t = $(this).closest("li").attr("data-sku"), a = $(this).data();
                a.venid && e.push(a.venid), "1" == a.presale && i.push(t) && (n[t] = $(this).parent().parent()), "1" == a.lease && s.push(t) && (o[t] = $(this).parent().parent()), this.setAttribute("data-done", "1")
            }), c.each(function () {
                var e = $(this).attr("data-sku"), s = $(this).data();
                t.push(e), a[e] = $(this), "1" == s.presale && i.push(e), this.setAttribute("data-done", "1")
            }), e.length && $.getJSON("//baozhang.jd.com/service/getAllInsure?venderIds=" + e.unique().join("-") + "&callback=?", function (e) {
                if ("object" == typeof e) for (var t = 0, a = e.length; t < a; t++) "1" == e[t].yFX && r.filter('[data-venid="' + e[t].venderId + '"]').each(function () {
                    $(this).parent().parent().find(".p-icons").append('<i class="goods-icons2 J-picon-tips" data-tips="\u9000\u6362\u8d27\u514d\u8fd0\u8d39">\u9669</i>')
                })
            }), i.length) {
            var l = !1;
            $.getJSON("//yushou.jd.com/youshouinfoList.action?sku=" + i.join(",") + "&callback=?", function (e) {
                if ("object" == typeof e) for (var t in e) {
                    var i = $.parseJSON(e[t]);
                    if ("object" == typeof i && (1 == i.type || 2 == i.type)) {
                        var s = n[t];
                        if (s && (SEARCH.presaleShow(s, i, t) && delete n[t], l = !0), a[t]) {
                            SEARCH.slaveWarePresaleData[t] = i;
                            var o = null;
                            if (1 == i.type) ; else if (i.ret) {
                                var r = i.ret;
                                1 == r.hideRealPrice || 1 == r.hidePrice && 3 == r.cs ? o = "\u5f85\u53d1\u5e03" : r.cp && (o = r.expAmount > 0 && r.depositWorth > 0 && r.oriPrice > 0 ? r.oriPrice : r.cp)
                            }
                            o && $(a[t]).data("dataPriceContent", o)
                        }
                    }
                }
                for (var c in a) $(a[c]).bind("mouseenter", function () {
                    var e = $(this).attr("data-sku"), t = SEARCH.slaveWarePresaleData[e],
                        a = $(this).parent().parent().parent().parent().parent().parent();
                    SEARCH.presaleShow(a, t, e, !0)
                });
                var d = [];
                for (var p in n) {
                    d.push(p);
                    var u = $("strong.J_" + p).filter("[data-price]");
                    u.html("<em>\uffe5</em><i>" + u.attr("data-price") + "</i>").removeAttr("data-price")
                }
            })
        }
        s.length && $.getJSON("//zuzuapi.jd.com/pcClient/pop/goods/fetchAttr?skuIds=" + s.join(",") + "&callback=?", function (e) {
            if ("object" == typeof e) for (var t = 0 == e.code && e.data && e.data.length > 0 ? e.data : [], a = 0, i = t.length; a < i; a++) if (t[a] && t[a].unitRent) {
                var s = "/\u5929";
                switch (t[a].leaseUnit) {
                    case 1:
                        s = "/\u5929";
                        break;
                    case 2:
                        s = "/\u5468";
                        break;
                    case 3:
                        s = "/\u6708"
                }
                var o = t[a].unitRent.split("."), n = "";
                o.length > 1 ? (n = o[0] + "." + o[1], 1 == o[1].length && (n += "0")) : n = t[a].unitRent + ".00", $("strong.J_" + t[a].skuId).html("<em>\uffe5</em><i>" + n + "</i><em>" + s + "</em")
            }
        })
    }, SEARCH.slaveWarePresaleData = {}, SEARCH.presaleShow = function (e, t, a, i) {
        var s = !1;
        if (t && a) {
            var o, n, r, c, l;
            if (1 == t.type) switch (n = t.d, parseInt(t.state)) {
                case 1:
                    r = "\u9884\u7ea6\u672a\u5f00\u59cb";
                    break;
                case 2:
                    r = "\u9884\u7ea6\u4e2d";
                    break;
                case 3:
                    r = "\u62a2\u8d2d\u672a\u5f00\u59cb";
                    break;
                case 4:
                    r = "\u62a2\u8d2d\u4e2d";
                    break;
                case 5:
                    r = "\u62a2\u8d2d\u7ed3\u675f";
                    break;
                default:
                    return !1
            } else {
                if (o = t.ret, n = o.d, r = "0" == o.s ? "\u9884\u552e\u672a\u5f00\u59cb" : "\u9884\u552e\u4e2d", "2" == o.t && o.sa) {
                    for (var d, p = '<div id="presale_show_data" class="p-presell-stage clearfix">', u = 0, f = o.sa.length; u < f; u++) d = u + 1 < o.cs ? " timeout" : u + 1 == o.cs ? " curr" : "", p += '<span class="item' + d + '"><a href="javascript:void(0)"><em>\u6ee1' + o.sa[u].c + "\u4eba</em>", p += "<strong>\uffe5" + o.sa[u].m + '</strong></a><i class="bottom"><em></em></i></span>';
                    p += "</div>", e.find("#presale_show_data").remove(), e.find(".p-name").after(p)
                }
                l = e.find(".p-price").find("strong i"), i || (1 == o.hideRealPrice || 1 == o.hidePrice && 3 == o.cs ? (l.html("\u5f85\u53d1\u5e03"), s = !0) : o.cp && (l.html(o.expAmount > 0 && o.depositWorth > 0 && o.oriPrice > 0 ? o.oriPrice : o.cp), s = !0))
            }
            c = '<div id="presale_show_item" class="p-presell-time" data-time="' + n + '"><i></i><span>' + r + "</span><em>" + SEARCH.presaleShowtimeHtml(n) + "</em></div>", e.find("#presale_show_item").remove(), e.append(c).parent().addClass("gl-item-presell")
        } else e.find("#presale_show_data").remove(), e.find("#presale_show_item").remove();
        return s
    }, SEARCH.presaleShowtimeHtml = function (e) {
        numberFormat = function (e, t) {
            return e = e.toString(), e.length >= t ? e : numberFormat("0" + e, t)
        };
        var t = Math.floor(e / 86400);
        e -= 86400 * t;
        var a = Math.floor(e / 3600);
        e -= 3600 * a, a = numberFormat(a, 2);
        var i = Math.floor(e / 60);
        e -= 60 * i, i = numberFormat(i, 2);
        var s = numberFormat(e, 2);
        return t > 0 ? "\u5269\u4f59" + t + "\u5929" + a + "\u65f6" + i + "\u5206" : "\u5269\u4f59" + a + "\u65f6" + i + "\u5206" + s + "\u79d2"
    }, SEARCH.get_prompt_adwords = function (e) {
        this.enable_prom_adwords && $.getJSON("//ad.3.cn/ads/mgets?source=search_pc&skuids=" + e.replace(/J_/g, "AD_") + "&callback=?", function (e) {
            if (e) for (var a = 0, i = e.length; a < i; a++) {
                var s = e[a].id || "", o = $("#J_" + s), n = t(e[a].ad);
                o.length && "" !== n && o.html(n).parent().attr("title", n).closest("li").find(".p-img>a").attr("title", n)
            }
        })
    }, SEARCH.get_prompt_flag = function (e) {
        this.enable_prom_flag && $.getJSON("//pf.3.cn/flags/mgets?source=search_pc&skuids=" + e + "&callback=?", function (e) {
            if (e && "object" == typeof e) {
                for (var t = 0, a = e.length, i = [], s = []; t < a; t++) {
                    var o = e[t], n = $("#J_pro_" + o.pid), r = function (e, t, a, o) {
                        if (e) {
                            var n, r, c = a.data("promotion");
                            if (c && t) {
                                n = !0, c = c.split("^"), r = c[1].substr(0, 3);
                                for (var l = 0, d = t.length; l < d; l++) if (0 == t[l].indexOf(c[1] + "_")) {
                                    n = !1;
                                    break
                                }
                                n && ("55-" == r ? i.push(o) : "59-" == r && s.push(o))
                            }
                            for (var p, u, f = 0, h = e.length, m = []; f < h; f++) switch (e[f]) {
                                case 5:
                                    m[1] = '<i class="goods-icons4 J-picon-tips" data-tips="\u8d2d\u4e70\u672c\u5546\u54c1\u9001\u8d60\u54c1">\u8d60</i>';
                                    break;
                                case 55:
                                    m[0] || (p = "\u672c\u5546\u54c1\u53c2\u4e0e\u6ee1\u51cf\u4fc3\u9500", u = "\u6ee1\u51cf", 0 == n && "55-" == r ? c[0].length > 10 ? p = c[0] : u = c[0] : void 0 == n && 0 == a.siblings(".p-promo-flag").length && (i.push(o), n = !0), m[0] = '<i class="goods-icons4 J-picon-tips" data-tips="' + p + '">' + u + "</i>");
                                    break;
                                case 58:
                                    m[1] || (m[1] = '<i class="goods-icons4 J-picon-tips" data-tips="\u6ee1\u6307\u5b9a\u91d1\u989d\u5373\u8d60\u70ed\u9500\u5546\u54c1">\u6ee1\u8d60</i>');
                                    break;
                                case 59:
                                    0 == n && "59-" == r ? m[0] = '<i class="goods-icons4 J-picon-tips" data-tips="\u672c\u5546\u54c1\u53c2\u4e0e\u6ee1\u4ef6\u4fc3\u9500">' + c[0] + "</i>" : void 0 == n && 0 == a.siblings(".p-promo-flag").length && (s.push(o), n = !0)
                            }
                            for (var f = 0, g = []; f < 2; f++) m[f] && g.push(m[f]);
                            return g.join("")
                        }
                    }(o.pf, o.pfi, n, o.pid);
                    v(n, r)
                }
                (i.length || s.length) && l("search.000002", {
                    logid: LogParm.log_id,
                    key: QUERY_KEYWORD,
                    err55: i.join(","),
                    err59: s.join(",")
                })
            }
        })
    }, SEARCH.get_comment_nums = function (e) {
        $.getJSON("//club.jd.com/comment/productCommentSummaries.action?referenceIds=" + e.replace(/J_/g, "") + "&callback=?", function (e) {
            if ("object" != typeof e || "object" != typeof e.CommentsCount) return !1;
            for (var t = 0, a = e.CommentsCount, i = a.length; t < i; t++) void 0 !== a[t].CommentCountStr && $("#J_comment_" + a[t].SkuId).html(a[t].CommentCountStr)
        })
    }, SEARCH.get_im_info = function (e, t) {
        if (!e || !t) return !1;
        $.ajax({
            url: "//chat1.jd.com/api/checkChat?pidList=" + t,
            dataType: "jsonp",
            jsonp: "callback",
            scriptCharset: "utf-8",
            success: function (t) {
                if ("object" != typeof t) return !1;
                for (var a = $("#store-selector").find(".text").text(), i = 0, s = t.length; i < s; i++) {
                    var o = t[i], n = "", r = e[o.pid], c = "1" == r.attr("data-selfware");
                    if (1 == o.code) n = '<b class="' + (c ? "im-02" : "im-01") + '" title="\u8054\u7cfb' + (c ? "\u4f9b\u5e94\u5546" : "\u7b2c\u4e09\u65b9\u5356\u5bb6") + '\u8fdb\u884c\u54a8\u8be2" onclick="searchlog(1,' + o.shopId + ',0,61)"></b>'; else {
                        if (3 != o.code) continue;
                        n = '<b class="im-offline" title="' + (c ? "\u4f9b\u5e94\u5546" : "\u7b2c\u4e09\u65b9\u5356\u5bb6") + '\u5ba2\u670d\u4e0d\u5728\u7ebf\uff0c\u53ef\u7559\u8a00" onclick="searchlog(1,' + o.shopId + ',0,61)"></b>'
                    }
                    var l = {}, d = $.trim(r.siblings(".p-stock").html());
                    d = "\u6682\u4e0d\u652f\u6301\u914d\u9001" == d ? d : d ? d.substr(d.length - 2) : "\u6709\u8d27", l.stock = a + "\uff08" + d + "\uff09", l.pid = o.pid, l.score = r.attr("data-score"), l.evaluationRate = r.attr("data-reputation"), l.commentNum = r.siblings(".p-commit").find("a").html();
                    var p = r.siblings(".p-img").find("img").eq(0), u = p.attr("src");
                    void 0 != u && "//misc.360buyimg.com/lib/img/e/blank.gif" != u || (u = p.attr("data-lazy-img")), l.imgUrl = function (e, t, a) {
                        e = void 0 == e ? "" : $.trim(e);
                        var i = e.match(t);
                        return a = void 0 == a ? 1 : a, null === i ? "" : i[a]
                    }(u, /http\S+?\.com\/\w+?\/(\S+)/), l.wname = r.siblings(".p-name").find("em").html().replace(/<span[\s\S]+?<\/span>|<font class="skcolor_ljg">|<\/font>/g, ""), l.advertiseWord = $.trim(r.siblings(".p-name").find("i.promo-words").html()), l.seller = $.trim(o.seller), l.venderId = o.venderId, l.entry = "jd_search";
                    var f = "//" + o.chatDomain + "/index.action?";
                    for (var h in l) f += h + "=" + encodeURI(encodeURI(l[h])) + "&";
                    r.find("span.J_im_icon,a.curr-shop").append(n).find("b").click(function (e) {
                        return function () {
                            return window.open(e), !1
                        }
                    }(f))
                }
            }
        })
    }, SEARCH.get_shop_name = function (e) {
        var t, a = this, i = $("#J_main").find("div.p-shop,div.p-shopnum").not('[data-done="1"]'), s = i.length, o = [],
            n = {};
        if (!s) return !1;
        for (var r, c = 0, l = []; c < s; c++) t = i[c].getAttribute("data-shopid"), t && l.push(t), r = i.eq(c).closest("li[data-sku]").attr("data-sku"), o.push(r), n[r] = i.eq(c), i[c].setAttribute("data-done", "1");
        l.length ? $.getJSON("shop_new.php", {ids: l.unique().join(",")}, function (t) {
            if ("object" == typeof t) {
                for (var r = 0, c = t.length, l = {}; r < c; r++) l[t[r].shop_id] = t[r];
                for (var r = 0; r < s; r++) {
                    var d = i.eq(r), p = l[d.attr("data-shopid")];
                    p && ("2" == e && d.removeAttr("data-shopid").find("a.curr-shop").replaceWith('<a class="curr-shop" target="_blank" onclick="searchlog(1,' + p.shop_id + ',0,58)" href="//mall.jd.com/index-' + p.shop_id + '.html" title="' + p.shop_name + '">' + p.shop_name + "</a>"), ("1" == e || "3" == e) && d.removeAttr("data-shopid").html('<span class="J_im_icon"><a target="_blank" onclick="searchlog(1,' + p.shop_id + ',0,58)" href="//mall.jd.com/index-' + p.shop_id + '.html" title="' + p.shop_name + '">' + p.shop_name + "</a></span>"))
                }
                a.get_im_info(n, o.unique().join(","))
            }
        }) : a.get_im_info(n, o.unique().join(","))
    }, SEARCH.get_ware_info = function () {
        var e = [], t = [], a = $("#J_main"), i = a.find("ul.gl-warp").attr("data-tpl"), s = [];
        a.find("strong[class^='J_']").not('[data-done="1"]').each(function () {
            this.setAttribute("data-done", "1"), e.push(this.className)
        }), a.find("em[class^='J_']").not('[data-done="1"]').each(function () {
            this.setAttribute("data-done", "1"), s.push(this.className)
        }), a.find("div.p-icons").not('[data-done="1"]').each(function () {
            this.setAttribute("data-done", "1"), t.push(this.id.replace("pro_", ""))
        }), e.length && this.get_digital_price(e.join(","), 0), this.get_ware_stock("", i), this.get_shop_info(), t.length && (t = t.join(","), this.get_prompt_adwords(t), !this.is_exchange_list && this.get_prompt_flag(t), !this.is_exchange_list && this.get_comment_nums(t)), this.get_icon_info(), this.get_shop_name(i), s.length && this.get_digital_price(s.join(","), 1)
    }, SEARCH.get_diviner_ware = function () {
        var e = [], t = this, a = t.cid, i = $("#J_goodsList"), s = (readCookie("ipLoc-djd") || "").split("-"),
            o = (s[0] && window.json_city[0][s[0]], $(window).width() >= 1390 ? 10 : 8);
        i.find("li[data-sku]").slice(0, 4).each(function () {
            e.push(this.getAttribute("data-sku"))
        }), $.ajax({
            url: "//diviner.jd.com/diviner?p=907006&skus=" + e.join(",") + "&uuid=&pin=" + (readCookie("pin") || "") + "&c3=" + a + "&lid=" + s[0] + "&lim=" + o + "&ec=utf-8",
            dataType: "jsonp",
            success: function (e) {
                if ("object" == typeof e && e.success) {
                    var a,
                        s = '<div class="m-tipbox"><div class="tip-inner"><div class="tip-text">\u6839\u636e\u4e0a\u9762\u7684\u5546\u54c1\u7ed3\u679c\uff0c\u4e3a\u60a8\u63a8\u8350\u7684\u76f8\u4f3c\u5546\u54c1\u3002</div></div></div><ul class="gl-warp clearfix J_diviner">',
                        o = i.find("ul[data-tpl]").attr("data-tpl"), c = function (e) {
                            var t = new Image;
                            e = e + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random(), t.setAttribute("src", e)
                        };
                    a = '<li data-sku="{#sku#}" class="gl-item" data-clk="{#clk#}" data-pos="{#pos#}"><div class="gl-i-wrap"><div class="p-img"><a target="_blank" title="{#t#}" href="//item.jd.com/{#sku#}.html"><img data-img="1" data-lazy-img="{#img_url#}"></a></div>' + ("3" == o ? '<div class="p-scroll"><span class="ps-prev">&lt;</span><span class="ps-next">&gt;</span><div class="ps-wrap"><ul class="ps-main"><li class="ps-item"><a href="javascript:;" class="curr"><img data-sku="{#sku#}" width="25" height="25" data-lazy-img="{#img_url#}"></a></li></ul></div></div>' : "") + '<div class="p-price"><strong class="J_{#sku#}"><em>\uffe5</em><i>{#jp#}</i></strong></div><div class="p-name"><a target="_blank" title="{#t#}" href="//item.jd.com/{#sku#}.html"><em>{#t#}</em><i class="promo-words" id="J_AD_{#sku#}"></i></a></div><div class="p-commit"><strong>\u5df2\u6709<a id="J_comment_{#sku#}" target="_blank" href="//item.jd.com/{#sku#}.html#comment">0</a>\u4eba\u8bc4\u4ef7</strong></div>' + ("3" == o ? '<div class="p-focus"><a class="J_focus" data-sku="{#sku#}" href="javascript:;" title="\u70b9\u51fb\u5173\u6ce8"><i></i>\u5173\u6ce8</a></div><div class="p-shop" data-selfware="0" data-score="5" data-reputation="100" data-done="1">{#shop#}</div>' : "") + '<div class="p-icons" id="J_pro_{#sku#}"></div>' + ("2" == o ? '<div class="p-shopnum" data-selfware="1" data-score="5" data-reputation="100" data-done="1"><span class="curr-shop">{#shop#}</span></div>' : ""), "1" != o && "2" != o || (a += '<div class="p-operate">' + ("1" == o ? '<a class="p-o-btn contrast J_contrast" data-sku="{#sku#}" href="javascript:;"><i></i>\u5bf9\u6bd4</a>' : "") + '<a class="p-o-btn focus J_focus" data-sku="{#sku#}" href="javascript:;"><i></i>\u5173\u6ce8</a><a class="p-o-btn addcart" data-stock="{#sku#}" data-sv="1" data-disable-notice="0" data-presale="0" href="//gate.jd.com/InitCart.aspx?pid={#sku#}&pcount=1&ptype=1" target="_blank"><i></i>\u52a0\u5165\u8d2d\u7269\u8f66</a></div>'), a += "</div></li>";
                    for (var d = e.data.length, u = 0; u < d; u++) {
                        var f = e.data[u];
                        f.index = f.sku % 5, f.pos = u, f.shop = p.pop(f.sku) ? " \u7b2c\u4e09\u65b9\u5546\u5bb6" : " \u4eac\u4e1c\u81ea\u8425", f.img_url = "2" == o ? r(f.sku, f.img, "cms/s200x200_") : r(f.sku, f.img, i.hasClass("gl-type-2") ? "n8/" : "n7/"), s += n(a, f)
                    }
                    i.append(s + "</ul>"), window.searchUnit && window.searchUnit.setImgLazyload && window.searchUnit.setImgLazyload("ul.J_diviner"), window.seajs.use("product/search/" + t.ui_ver + "/js/goodsList", function (e) {
                        e.init()
                    }), t.get_ware_info(), i.find("ul.J_diviner>li").click(function (e) {
                        var t = $(this), a = e.target.nodeName;
                        ("A" != a && "IMG" != a || $(e.target).parents(".p-scroll").length) && "FONT" != a && "EM" != a && "I" != a || (c(t.attr("data-clk")), JA.tracker.ngloader("search.000003", {
                            logid: LogParm.log_id,
                            logtype: 1,
                            key: QUERY_KEYWORD,
                            reco_type: "tj",
                            result_count: d,
                            pos: t.attr("data-pos")
                        }))
                    }), c(e.impr), l("search.000003", {
                        logid: LogParm.log_id,
                        logtype: 0,
                        key: QUERY_KEYWORD,
                        reco_type: "tj",
                        result_count: d,
                        pos: 0
                    })
                }
            }
        })
    }, SEARCH.load = function (e, t) {
        if (this.loading) return !1;
        this.loading = !0;
        var s = this, o = a("click", e), n = t ? 1 : o == s.click ? 2 : 3;
        "1" != $("#J_viewType").attr("data-ref") && (e = i(e, "vt", s.view_type)), $.ajax({
            url: i(e, "cs", 3 == n ? "y" : "").replace(/[\s&]*$/g, ""),
            timeout: 15e3,
            error: function () {
                s.load_error = !0, 1 == n ? $("#J_scroll_loading").addClass("notice-loading-error").find("span").html('\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7<a href="javascript:void(0)" onclick="SEARCH.load(\'' + e + '\',true)"><font color="blue">\u91cd\u8bd5</font></a>') : $("#J_loading").find("span").css("background", "none").html("\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7<a href=\"javascript:void(0)\" onclick=\"$('#J_loading').remove();SEARCH.load('" + e + '\')"><font color="blue">\u91cd\u8bd5</font></a>')
            },
            beforeSend: function () {
                1 == n ? $("#J_scroll_loading").removeClass("notice-loading-error").find("span").html("\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e~~") : ($("#J_filter").after('<div id="J_loading" class="notice-filter-loading"><div class="nf-l-wrap"><span>\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e~</span></div></div>'), 3 == n && c())
            },
            success: function (e) {
                if (1 == n) {
                    $("#J_scroll_loading").remove();
                    (s.is_shop ? $("#J_shopList") : $("#J_goodsList").find("ul.gl-warp")).append(e)
                } else if (2 == n) $("#J_filter").nextAll().remove(), $("#J_filter").after(e); else {
                    var t = $("#J_main").find(".m-aside").find(".J_adv_tuiguang_exposal").remove().end().html();
                    $("#J_searchWrap").html(e).find(".m-aside").html(t), c(), window.seajs.use(["product/search/" + s.ui_ver + "/js/selector"], function (e) {
                        e.init()
                    }), s.bind_events.init()
                }
                s.success_js(n)
            },
            complete: function () {
                s.loading = !1
            }
        })
    }, SEARCH.success_js = function (e) {
        delete this.load_error, this.get_ware_info(), window.searchUnit.setImgLazyload("#J_main"), window.seajs.use("product/search/" + this.ui_ver + "/js/goodsList", function (e) {
            e.init()
        }), this.is_exchange_list && window.searchUnit && window.searchUnit.setGoodsChecked && window.searchUnit.setGoodsChecked(), 1 != e && window.searchUnit.initAside(), searchlog(0, 0)
    }, SEARCH.page_html = function (e, t, a, i, s, o, n, r) {
        if (this.current_page = e, this.next_start = s, this.prev_start = o, this.advware_count = n, this.promotion_count = r, i) {
            this.enable_twice_loading = 1, e = Math.ceil(e / 2), t = Math.ceil(t / 2);
            var c = 2 * e - 3, l = 2 * e + 1
        } else {
            this.enable_twice_loading = 0;
            var c = e - 1, l = e + 1
        }
        var d = '<span class="fp-text"><b>' + e + "</b><em>/</em><i>" + t + "</i></span>";
        if (d += e <= 1 ? '<a class="fp-prev disabled" href="javascript:;">&lt;</a>' : '<a class="fp-prev" onclick="SEARCH.page(' + c + ')" href="javascript:;" title="\u4f7f\u7528\u65b9\u5411\u952e\u5de6\u952e\u4e5f\u53ef\u7ffb\u5230\u4e0a\u4e00\u9875\u54e6\uff01">&lt;</a>', d += e >= t ? '<a class="fp-next disabled" href="javascript:;">&gt;</a>' : '<a class="fp-next" onclick="SEARCH.page(' + l + ')" href="javascript:;" title="\u4f7f\u7528\u65b9\u5411\u952e\u53f3\u952e\u4e5f\u53ef\u7ffb\u5230\u4e0b\u4e00\u9875\u54e6\uff01">&gt;</a>', $("#J_topPage").html(d), $("#J_resCount").html(a), t <= 1) return "";
        var p = e - 2, u = Math.min(t, e + 2), d = '<span class="p-num">';
        u < 7 ? u = Math.min(7, t) : p = u - 4, d += e <= 1 ? '<a class="pn-prev disabled"><i>&lt;</i><em>\u4e0a\u4e00\u9875</em></a>' : '<a class="pn-prev" onclick="SEARCH.page(' + c + ', true)" href="javascript:;" title="\u4f7f\u7528\u65b9\u5411\u952e\u5de6\u952e\u4e5f\u53ef\u7ffb\u5230\u4e0a\u4e00\u9875\u54e6\uff01"><i>&lt;</i><em>\u4e0a\u4e00\u9875</em></a>';
        for (var f = 1; f <= t; f++) if (f <= 2 || f >= p && f <= u) d += f == e ? '<a href="javascript:;" class="curr">' + f + "</a>" : '<a onclick="SEARCH.page(' + (i ? 2 * f - 1 : f) + ', true)" href="javascript:;">' + f + "</a>"; else if (f < p) d += '<b class="pn-break">...</b>', f = p - 1; else if (f > u) {
            d += '<b class="pn-break">...</b>';
            break
        }
        d += e >= t ? '<a class="pn-next disabled"><em>\u4e0b\u4e00\u9875</em><i>&gt;</i></a>' : '<a class="pn-next" onclick="SEARCH.page(' + l + ', true)" href="javascript:;" title="\u4f7f\u7528\u65b9\u5411\u952e\u53f3\u952e\u4e5f\u53ef\u7ffb\u5230\u4e0b\u4e00\u9875\u54e6\uff01"><em>\u4e0b\u4e00\u9875</em><i>&gt;</i></a>', d += '</span><span class="p-skip"><em>\u5171<b>' + t + '</b>\u9875&nbsp;&nbsp;\u5230\u7b2c</em><input class="input-txt" type="text" value="' + e + '" onkeydown="javascript:if(event.keyCode==13){SEARCH.page_jump(' + t + "," + i + ');return false;}"><em>\u9875</em><a class="btn btn-default" onclick="SEARCH.page_jump(' + t + "," + i + ')" href="javascript:;">\u786e\u5b9a</a></span>', $("#J_bottomPage").html(d)
    }, SEARCH.page = function (e, t) {
        e = parseInt(e, 10), e < 1 && (e = 1), t && c();
        var a, i = Math.min, s = this.enable_twice_loading ? 1 : 2, o = 30 * s, n = 4 * s, r = 2 * s;
        a = 1 == e ? 1 : e < this.current_page ? this.prev_start - (this.current_page - e) * o + i(this.advware_count, (this.current_page - 1) * n) - i(this.advware_count, (e - 1) * n) + i(this.promotion_count, (this.current_page - 1) * r) - i(this.promotion_count, (e - 1) * r) : e == this.current_page ? this.prev_start : this.next_start + (e - this.current_page - 1) * o - i(this.advware_count, (e - 1) * n) + i(this.advware_count, this.current_page * n) - i(this.promotion_count, (e - 1) * r) + i(this.promotion_count, this.current_page * r), _(this.base_url + "&page=" + e + "&s=" + a + "&click=" + this.click), searchlog(1, e, 0, 56)
    }, SEARCH.sort_html = function (e) {
        "0" == (e = e || "") && (e = "");
        var t = "", a = '<a href="javascript:;" class="#class#" onclick="#click#">#name#</a>', i = class_name = "";
        "" == e ? class_name = "curr" : i = "SEARCH.sort('')", t += a.replace("#class#", class_name).replace("#click#", i).replace("#name#", "\u7efc\u5408<i></i>"), class_name = i = "", "3" == e ? class_name = "curr" : i = "SEARCH.sort('3')", t += a.replace("#class#", class_name).replace("#click#", i).replace("#name#", "\u9500\u91cf<i></i>"), class_name = i = "", "4" == e || "11" == e ? class_name = "curr" : i = "SEARCH.sort('" + (this.comment_6m ? 11 : 4) + "')", t += a.replace("#class#", class_name).replace("#click#", i).replace("#name#", "\u8bc4\u8bba\u6570<i></i>"), "2" == $("ul.gl-warp").attr("data-tpl") ? (class_name = i = "", "6" == e ? class_name = "curr" : i = "SEARCH.sort('6')", t += a.replace("#class#", class_name).replace("#click#", i).replace("#name#", "\u51fa\u7248\u65f6\u95f4<i></i>")) : (class_name = i = "", "5" == e ? class_name = "curr" : i = "SEARCH.sort('5')", t += a.replace("#class#", class_name).replace("#click#", i).replace("#name#", "\u65b0\u54c1<i></i>")), this.is_promotion && (class_name = i = "", "9" == e ? class_name = "curr" : i = "SEARCH.sort('9')", t += a.replace("#class#", class_name).replace("#click#", i).replace("#name#", "\u964d\u4ef7\u5e45\u5ea6<i></i>"), class_name = i = "", "10" == e ? class_name = "curr" : i = "SEARCH.sort('10')", t += a.replace("#class#", class_name).replace("#click#", i).replace("#name#", "\u964d\u4ef7\u91d1\u989d<i></i>")), "2" == e ? (class_name = "curr", i = "SEARCH.sort('1')") : "1" == e ? (class_name = "curr", i = "SEARCH.sort('2')") : (class_name = "", i = "SEARCH.sort('2')"), t += a.replace("#class#", class_name).replace("#click#", i).replace("#name#", '<span class="fs-tit">\u4ef7\u683c</span><em class="fs-' + ("1" == e ? "down" : "up") + '"><i class="arrow-top"></i><i class="arrow-bottom"></i></em>'), t = t.replace(/>(.+?)<i><\/i><\/a>/g, '><span class="fs-tit">$1</span><em class="fs-down"><i class="arrow"></i></em></a>'), $("#J_filter").find("div.f-sort").html(t)
    }, SEARCH.sort = function (e) {
        e = e || "", "0" == e && (e = ""), _(i(this.base_url, "psort", e) + "&click=" + this.click), searchlog(1, e, 0, 55), s("#J_selector", "psort", e)
    }, SEARCH.exchange_filter = function (e, t) {
        var a = window.event || arguments.callee.caller.arguments[0],
            s = $(a.target ? a.target : a.srcElement).parent();
        if (s.hasClass("selected")) return !1;
        _(i(this.base_url, e ? "cid3" : ["cid2", "cid3"], e ? "" + e : "")), s.addClass("selected").siblings().removeClass("selected"), searchlog(1, e, t, 51)
    }, SEARCH.page_jump = function (e, t) {
        var a = parseInt($("#J_bottomPage").find("input").val(), 10);
        isNaN(a) && (a = 1), a > e && (a = e), this.page(t ? 2 * a - 1 : a, !0)
    }, SEARCH.scroll = function () {
        var e, t, a = this.current_page + 1, i = $("#J_goodsList"), s = [],
            o = "s_new.php?" + g(this.base_url) + "&page=" + a + "&s=" + this.next_start + "&scrolling=y&log_id=" + LogParm.log_id + "&tpl=";
        e = this.is_shop ? "3_M" : i.find("ul.gl-warp").attr("data-tpl") + (i.hasClass("gl-type-2") ? "_L" : "_M"), o += e, a % 2 == 0 && (t = 0 == e.indexOf("3_") ? "data-pid" : "data-sku", i.find("ul.gl-warp > li[" + t + "]").each(function () {
            s.push(this.getAttribute(t))
        }), o += "&show_items=" + s.join(",")), this.load(o, !0), searchlog(1, a, 0, 56)
    }, SEARCH.bind_events = {
        iplocation: function (e) {
            seajs.use(["jdf/1.0.0/ui/switchable/1.0.0/switchable", "jdf/1.0.0/ui/area/1.0.0/area"], function () {
                $("#J_store_selector").area({
                    scopeLevel: 4,
                    hasCommonAreas: 0,
                    hasOversea: 1,
                    repLevel: 0,
                    hasCssLink: 0,
                    onChange: function (t, a) {
                        return window.location.href = window.location.pathname + "?" + i(e.base_url, ["stock", "dt"]) + "&" + Math.random() + "#J_main", !1
                    }
                })
            })
        }, async_category: function (e) {
            var t = g(e.base_url);
            e.c_category && $.get("category.php?" + i(t, ["ev", "psort"]) + (e.p_category ? "&c=all" : ""), function (e) {
                $("#J_crumbsBar").find('ul[data-level="c"]').append(e).find("li").length > 30 && $("#J_crumbsBar").find('ul[data-level="c"]').parent().addClass("menu-drop-xl")
            }), e.p_category && $.get("category.php?" + i(t, ["ev", "psort", "cid1", "cid2", "cid3"]) + "&cid2=" + e.p_category, function (e) {
                $("#J_crumbsBar").find('ul[data-level="p"]').append(e)
            })
        }, price_select: function (e) {
            var t = $("#J_selectorPrice"), a = t.find("input"), i = a.eq(0).val(), s = a.eq(1).val();
            a.length && (a.keypress(function (e) {
                var t = e.keyCode || e.charCode;
                t && (t < 48 || t > 57) && 46 != t && 8 != t && 37 != t && 39 != t && e.preventDefault()
            }).focus(function () {
                "\xa5" == $(this).val() && $(this).val("").css("color", "#333")
            }).blur(function (e) {
                var t = $(this), a = $.trim(t.val());
                new RegExp("^[0-9]+(.[0-9]{2})?$", "g").test(a) || t.val("\xa5").css("color", "#ccc"), e.stopPropagation()
            }), t.find(".J-price-confirm").click(function (e, t) {
                var i = parseInt(a.eq(0).val(), 10), s = parseInt(a.eq(1).val(), 10), o = $(this).attr("data-url");
                if ("cancle" == t) o = o.replace("exprice_%7Bmin%7D-%7Bmax%7D%40", "").replace("exprice_%7Bmin%7D-%7Bmax%7D%5E", ""); else if (isNaN(i) || isNaN(s)) if (isNaN(i)) {
                    if (isNaN(s)) return !1;
                    searchlog(1, 0, 0, 22, "\u4ef7\u683c::0-" + s), o = o.replace("%7Bmin%7D", 0).replace("%7Bmax%7D", s)
                } else searchlog(1, 0, 0, 22, "\u4ef7\u683c::" + i + "gt"), o = o.replace("%7Bmin%7D", i).replace("-%7Bmax%7D", "gt"); else {
                    if (i > s) {
                        var n = i;
                        i = s, s = n
                    }
                    searchlog(1, 0, 0, 22, "\u4ef7\u683c::" + i + "-" + s), o = o.replace("%7Bmin%7D", i).replace("%7Bmax%7D", s)
                }
                return window.location.href = o, !1
            }), t.find(".J-price-cancle").click(function () {
                a.val("\xa5").css("color", "#ccc")
            }), $("#J_filter").find(".fdg-item").mouseenter(function () {
                var e = $(this).attr("data-range").match(/(\d+)-(\d*)/), t = e[1], i = e[2];
                a.eq(0).val(t), a.eq(1).val(i), a.css("color", "#333")
            }).mouseleave(function () {
                a.eq(0).val(i), a.eq(1).val(s), "\xa5" == i && a.eq(0).css("color", "#ccc"), "\xa5" == s && a.eq(1).css("color", "#ccc")
            }).click(function () {
                t.find(".J-price-confirm").trigger("click", [$(this).hasClass("fdg-item-curr") ? "cancle" : ""])
            }), t.filter(".f-price").mouseenter(function () {
                $(this).addClass("f-price-focus")
            }).mouseleave(function () {
                $(this).removeClass("f-price-focus")
            }))
        }, condition_filter: function (e) {
            $("#J_feature,#J_location").find("a").click(function (t) {
                var a = $(this).attr("data-field");
                return !!a && ($(this).hasClass("selected") ? ($(this).removeClass("selected"), _(i(e.base_url, a) + "&click=" + (e.click + 1))) : ($(this).addClass("selected"), _(i(e.base_url, a, $(this).attr("data-val")) + "&click=" + (e.click + 1))), !1)
            })
        }, view_type: function (e) {
            e.view_type = a("vt", e.base_url), $("#J_viewType").find("a").click(function () {
                if ($(this).hasClass("selected")) return !1;
                $(this).addClass("selected").siblings().removeClass("selected");
                var t = e.view_type = $(this).attr("data-value");
                return "1" == $(this).parent().attr("data-ref") ? _(i(e.base_url, "vt", t) + "&click=" + (e.click + 1)) : "1" == t ? $("#J_goodsList").attr("class", $("#J_goodsList").attr("class").replace("gl-type-4", "gl-type-5")).find('li[data-type="activity"]').hide() : $("#J_goodsList").attr("class", $("#J_goodsList").attr("class").replace("gl-type-5", "gl-type-4")).find('li[data-type="activity"]').show(), !1
            })
        }, research: function (e) {
            var t = a("exp_key", e.base_url), s = function (a) {
                var s = $.trim(a.val());
                "" == s && !t || "\u5728\u7ed3\u679c\u4e2d\u641c\u7d22" == s || (searchlog(1, 0, 0, 27), window.location.href = "?" + i(e.base_url, "exp_key", encodeURIComponent(s)) + "#J_crumbsBar")
            };
            $("#J_filter").find(".f-search a").click(function (e) {
                s($(this).prev())
            }).prev().focus(function () {
                "\u5728\u7ed3\u679c\u4e2d\u641c\u7d22" == $.trim($(this).val()) && $(this).val("")
            }).blur(function () {
                "" == $.trim($(this).val()) && "" == t && $(this).val("\u5728\u7ed3\u679c\u4e2d\u641c\u7d22")
            }).keydown(function (e) {
                13 == e.keyCode && s($(this))
            })
        }, init: function () {
            var e = window.SEARCH;
            for (var t in this) "init" != t && this[t](e)
        }
    }, SEARCH.init = function (e, t, a, i, s, o, n, r, c, l) {
        o && this.get_diviner_ware(), this.get_ware_info(), this.page_html(e, t, a, s, n, r, c, l), this.sort_html(i), this.bind_events.init(), this.sync_iframe_height(), m()
    }, function (t, a) {
        e ? t.onpopstate = function (e) {
            var i = g(t.location.search.substr(1));
            i && a.load("s_new.php?" + i)
        } : "function" == typeof a.is_correct_hash && $(t).hashchange(function () {
            var e = a.get_real_hash();
            e && "J_searchWrap" != e || (e = t.location.search.substr(1)), e = g(e), a.is_correct_hash(e) && a.load("s_new.php?" + e)
        })
    }(window, SEARCH);
    var b = null;
    $(window).scroll(function () {
        clearTimeout(b), b = setTimeout(function () {
            var e = $("#J_scroll_loading");
            if (SEARCH.loading || SEARCH.load_error || !SEARCH.enable_twice_loading || !e.length || e.offset().top - 600 > $(window).height() + $(window).scrollTop()) return !1;
            SEARCH.scroll()
        }, 20)
    }).load(function () {
        var e = JSTiming.getTimes();
        e.oReady = w, e.oLoad = (new Date).getTime() - jdpts._st, l("search.000010", e)
    });
    var w;
    $(document).keyup(function (e) {
        var t = document.activeElement.tagName.toLowerCase();
        if ("input" != t && "textarea" != t) {
            var a = 0, e = e || event, i = $("#J_filter");
            switch (a = e.keyCode || e.which || e.charCode, i.length && i.offset().top, a) {
                case 37:
                    $("#J_bottomPage a.pn-prev").trigger("click");
                    break;
                case 39:
                    $("#J_bottomPage a.pn-next").trigger("click")
            }
        }
    }).ready(function () {
        w = (new Date).getTime() - jdpts._st, SEARCH.relate_search.init(), searchlog(0, u()), log(2, 1, QUERY_KEYWORD)
    }), module.exports = SEARCH
});
