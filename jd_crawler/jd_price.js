define("product/module/tools", function (require, a, b) {
    var c;
    !function () {
        function a(a, c, d, e) {
            $.isFunction(c) && (e = d, d = c, c = !1), o = !!c, $.isArray(a) && a.length > 0 && $.isFunction(d) && (a.requestID = b(), m ? n[a.requestID] = {
                skus: a,
                callback: d,
                extraParams: e
            } : l(a, d, e))
        }

        function b() {
            return p++
        }

        function d() {
            return $.ajax({url: "//pcp.jd.com/captcha/registry", dataType: "jsonp", timeout: 2e3})
        }

        function e(a, b) {
            return $.ajax({
                url: "//pcp.jd.com/verify/cp",
                dataType: "jsonp",
                timeout: 2e3,
                data: {acId: b, authCode: a}
            })
        }

        function f(a) {
            d().then(function (b) {
                g(b, a)
            }, i)
        }

        function g(a, b) {
            b.data("acId", a.acId), b.attr("src", "//" + a.imageUrl)
        }

        function h() {
            m = !1, $.closeDialog(), $.each(n, function (a, b) {
                l(b.skus, b.callback, b.extraParams)
            })
        }

        function i() {
            o = !0, h()
        }

        function j() {
            m || (m = !0, d().then(function (a) {
                require.async(["product/module/authcode.css", "jdf/1.0.0/ui/dialog/1.0.0/dialog"], function () {
                    $("body").dialog({
                        title: "\u63d0\u793a",
                        width: 498,
                        type: "text",
                        extendMainClass: "popup-authcode",
                        source: q,
                        onReady: function () {
                            var b = $(this.content), c = b.find(".code");
                            g(a, c), b.delegate(".change", "click", function (a) {
                                a.preventDefault(), a.stopPropagation(), f(c)
                            }), b.find(".authcode").bind("keydown", function (a) {
                                13 == a.keyCode && (b.find(".f-submit").trigger("click"), a.stopPropagation(), a.preventDefault())
                            }), b.delegate(".f-submit", "click", function (a) {
                                a.stopPropagation(), a.preventDefault();
                                var d = $.trim($(".authcode").val());
                                d && c.data("acId") && e(d, c.data("acId")).then(function (a) {
                                    600 == a || 602 == a ? b.find(".input-tip").show() : 605 == a ? h() : i()
                                }, i)
                            })
                        }
                    })
                })
            }, i))
        }

        function k() {
            var a = readCookie("__jda");
            return a && a.indexOf(".") > -1 ? a.split(".")[1] : ""
        }

        function l(a, b, c) {
            var d = {}, e = {
                type: 1,
                area: readCookie("ipLoc-djd") ? readCookie("ipLoc-djd").split(".")[0].replace(/-/g, "_") : 1,
                skuIds: $.map(a, function (a) {
                    return "J_" + a
                }).join(","),
                pdbp: o ? 1 : 0,
                pdtk: readCookie("pdtk") ? decodeURIComponent(readCookie("pdtk")) : "",
                pdpin: readCookie("pin") ? decodeURIComponent(readCookie("pin")) : "",
                pduid: k(),
                source: window.pageConfig && window.pageConfig.pSource ? window.pageConfig.pSource : "pg_" + window.location.host
            };
            $.isPlainObject(c) || (c = {}), $.extend(d, c, e), $.ajax({
                url: "//p.3.cn/prices/mgets",
                dataType: "jsonp",
                data: d,
                success: function (c) {
                    if (c) if (c.error && "pdos_captcha" == c.error) j(), n[a.requestID] = {
                        skus: a,
                        callback: b
                    }; else {
                        if (c.error) return;
                        $.each(c, function (a, b) {
                            b.sku = b.id.replace(/^J_/, ""), b.pText = Number(b.p) > 0 ? b.p : "\u6682\u65e0\u62a5\u4ef7"
                        }), b.call(null, c), delete n[a.requestID]
                    }
                }
            })
        }

        var m = !1, n = {}, o = !1, p = 1,
            q = '<div class="authcode-tip"> <div class="tip-inner">     <i class="tip-icon"></i>     <div class="tip-cont">         <h5 class="tip-title">\u52a0\u6cb9\uff01\u60a8\u548c\u5b9d\u8d1d\u53ea\u6709\u4e00\u4e2a\u9a8c\u8bc1\u7801\u7684\u8ddd\u79bb\u5566\uff01</h5>         <div class="authcode-input authcode-warn">             <input class="authcode" type="text" placeholder="\u8f93\u5165\u540e\u65b9\u663e\u793a\u7684\u901a\u5173\u5bc6\u7801">             <img alt="" src="" class="code">             <a href="#" class="change">\u6362\u4e00\u6362</a>             <div style="display:none" class="input-tip">\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01</div>         </div>         <div class="btnbox"><a href="#none" class="f-submit">\u63d0\u4ea4</a></div>     </div> </div></div>';
        c = a
    }();
    var d = function (a, b, d, e, f, g) {
        a = "string" == typeof a ? [a] : a, d = d || $("body"), e = e || "J-p-", f = f || "\uffe5{NUM}", c(a, pageConfig && pageConfig.price_pdos_off, function (a) {
            if (!a && !a.length) return !1;
            for (var b = 0; b < a.length; b++) {
                if (!a[b].id) return !1;
                var c = a[b].id.replace("J_", ""), h = parseFloat(a[b].p);
                parseFloat(a[b].m);
                h > 0 ? d.find("." + e + c).html(f.replace("{NUM}", a[b].p)) : d.find("." + e + c).html("\u6682\u65e0\u62a5\u4ef7"), "function" == typeof g && g(c, a[b], "")
            }
        })
    }, e = function (a, b) {
        a = a || [], b = b || $("body");
        var c = window.pageConfig && window.pageConfig.pSource ? window.pageConfig.pSource : "pg_" + window.location.host;
        $.ajax({
            url: "//ad.3.cn/ads/mgets?skuids=AD_" + a.join(",AD_") + "&source=" + c,
            dataType: "jsonp",
            success: function (a) {
                var c, d, e, f = 0;
                if (a && a.length > 0) for (c = a.length, f; c > f; f++) d = a[f].ad, e = a[f].id.replace("AD_", ""), b.find(".p-name .sku" + e).html(d)
            }
        })
    }, f = function (a, b, c, d, e) {
        a = a || [], b = b || $("body").eq(0), c = c || "p-comm-", d = d || "(\u5df2\u6709{NUM}\u4eba\u8bc4\u4ef7)", $.ajax({
            url: "//club.jd.com/clubservice.aspx?method=GetCommentsCount&referenceIds=" + a,
            dataType: "jsonp",
            success: function (a) {
                var b;
                if (a && a.CommentsCount.length) {
                    b = a.CommentsCount.length;
                    for (var f = 0; b > f; f++) $("." + c + a.CommentsCount[f].SkuId).find(".star").removeClass("sa5").addClass("sa" + a.CommentsCount[f].AverageScore), $("." + c + a.CommentsCount[f].SkuId).html(d.replace("{NUM}", a.CommentsCount[f].CommentCount)), e && e(a.CommentsCount[f].SkuId, a.CommentsCount[f])
                }
            }
        })
    };
    a.commentMeta = f, a.priceNum = d, a.adWords = e, a.getPrice = c
});
/*
