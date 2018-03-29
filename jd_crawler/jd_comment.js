/*!Name: comment.js
 * Date: 2018-3-27 21:27:20 */
define("MOD_ROOT/comment/comment", function (require, exports, module) {
    function t(t) {
        c.init(t).getData($("#comment-0"), 0, 0)
    }

    var e = require("JDF_UNIT/login/1.0.0/login"), i = require("MOD_ROOT/common/tools/event").Event,
        a = require("MOD_ROOT/common/core"), s = require("MOD_ROOT/comment/showImgSwitch");
    require("JDF_UI/pager/1.0.0/pager"), require("PLG_ROOT/jQuery.imgScroll"), require("JDF_UNIT/trimPath/1.0.0/trimPath"), require("JDF_UI/dialog/1.0.0/dialog");
    var n = {};
    n.commentRate = '    <div class="comment-percent">        <strong class="percent-tit">\u597d\u8bc4\u5ea6</strong>        <div class="percent-con">${productCommentSummary.goodRateShow}<span>%</span>        </div>    </div>    <div class="percent-info">        {if !(hotCommentTagStatistics && typeof hotCommentTagStatistics!="undefined" && hotCommentTagStatistics!=null && hotCommentTagStatistics.length>0) && !(vTagStatisticsResult && typeof vTagStatisticsResult!="undefined" && vTagStatisticsResult.length>0)}            <div class="notag">\u6b64\u5546\u54c1\u6682\u65f6\u8fd8\u6ca1\u6709\u4e70\u5bb6\u5370\u8c61\u54e6~</div>        {/if}        {if typeof hotCommentTagStatistics!="undefined" && hotCommentTagStatistics!=null && hotCommentTagStatistics.length>0}        <div class="tag-list {if vTagStatisticsResult.length} empty-rate{/if}" clstag="shangpin|keycount|product|comment_icon">            {for tag in hotCommentTagStatistics}                <span class="{if rid==tag.rid}selected{/if} tag-${tag.stand}"                     data-id="${tag.rid}"                     data-rid="${tag.rid}">${tag.name}(${tag.count})</span>            {/for}        </div>        {/if}        {if typeof vTagStatisticsResult!="undefined" && vTagStatisticsResult.length>0}        <div class="percent-rate">            {for vTagStatistic in vTagStatisticsResult}                <div class="rate-item">                    <strong>${vTagStatistic.name}</strong>                    <div class="rate-wrap">                        <div class="inner-rate" style="width:${vTagStatistic.maxRate}%;"></div>                    </div>                    <div class="rate-info">                        ${vTagStatistic.maxName} ${vTagStatistic.maxRate}%                        <span>${vTagStatistic.otherName}</span>                    </div>                </div>            {/for}        </div>        {/if}    </div>', n.commentItem = '    {for list in comments}    <div class="comment-item" data-guid="${list.guid}" data-top="${list.top}">        <div class="user-column">            <div class="user-info">                {if typeof list.userImageUrl!=="undefined"}                    <img src="//${list.userImageUrl}" width="25" height="25" alt="${list.nickname}" class="avatar"/>                {/if}                ${list|getDisplayName}            </div>            <div class="user-level">                {if typeof list.plusAvailable!="undefined"&&(list.plusAvailable==101||list.plusAvailable==201)}                    <span style="color:{if list.userLevelColor}${list.userLevelColor}{/if}">${list.userLevelName}</span>{if list.userProvince}${list.userProvince}{/if}                {else}                    <span style="color: rgb(136, 136, 136);">{if list.userExpValue!="undefined" && list.userExpValue!=null && list.userExpValue}\u4eac\u4eab\u503c${list.userExpValue}{/if}</span>{if list.userProvince}${list.userProvince}{/if}                {/if}            </div>        </div>        <div class="comment-column J-comment-column">            <div class="comment-star star${list.score}"></div>            <p class="comment-con">${list.content.replace(/\\n+/g, "<br />")}</p>            {if list.mergeOrderStatus>0&&list.images}            <div class="pic-list J-pic-list">                {for image in list.images}                    {if Number(image_index)<10}                    <a class="J-thumb-img" href="#none" data-ind="${image_index}"><img src="${image.imgUrl.replace("128x96", "48x48")}" width="48" height="48" alt="${list.nickname}\u7684\u6652\u5355\u56fe\u7247"/></a>                    {/if}                {/for}            </div>            {/if}            <div class="J-pic-view-wrap clearfix" data-rotation="0">            </div>            {if list.commentTags&&list.commentTags.length}            <div class="tag-list">                {for tag in list.commentTags}                    {if Number(tag_index)<5}                    <span data-tid="${tag.id}">${tag.name}</span>                    {/if}                {/for}            </div>            {/if}            {if list.verticalTags&&list.verticalTags.length}            <div class="tag-list">                {for verticalTag in list.verticalTags}                    {if Number(verticalTag_index)<5}                    <span data-tid="${verticalTag[0].commentId}">${verticalTag[0].name}\uff1a${verticalTag[1].name}</span>                    {/if}                {/for}            </div>            {/if}            <div class="comment-message">                <div class="order-info">                    {if list.productColor&&list.productColor!=""}<span>${list.productColor}</span>{/if}{if list.productSize&&list.productSize!=""}<span>${list.productSize}</span>{/if}                    {for product in list.productSales}                        <span>${product.saleValue}</span>                    {/for}                    <span>${list.creationTime|formatCommentTime}</span>                </div>                <div class="comment-op">                    <a class="J-report" data-login="1" href="#none" data-guid="${list.guid}"                        clstag="shangpin|keycount|product|pingjiaubao">\u4e3e\u62a5</a>                    <a class="J-nice"  data-login="1" href="#none" data-guid="${list.guid}" title="${list.usefulVoteCount}"><i class="sprite-praise"></i>${list.usefulVoteCount}</a>                    <a href="//club.jd.com/repay/${productCommentSummary.productId}_${list.guid}_1.html" target="_blank"><i class="sprite-comment"></i>${list.replyCount}</a>                </div>            </div>            {if list.afterUserComment && list.afterUserComment.hAfterUserComment}                <div class="append-comment J-append-comment" data-id="${list.afterUserComment.id}">                    <div class="append-time">[\u8d2d\u4e70${list.afterDays|formatDay}\u8ffd\u8bc4]</div>                    <p class="comment-con">${list.afterUserComment.hAfterUserComment.content}</p>                    {if list.afterImages && list.afterImages.length}                    <div class="pic-list J-pic-list">                        {for img in list.afterImages}                            <a class="J-thumb-img" href="#none" target="_self"><img src="${img.imgUrl.replace("128x96", "48x48")}" width="48" height="48"></a>                        {/for}                    </div>                    {/if}                    <div class="J-pic-view-wrap clearfix" data-rotation="0"></div>                </div>            {/if}            {for reply in list.replies}            <div class="recomment-con">                <dl class="recomment">                    <dt>${reply|getReplyName} \u56de\u590d\uff1a</dt>                    <dd>${reply.content}</dd>                </dl>                <div class="comment-time">                    ${reply.creationTime|timeToDate}                </div>            </div>            {/for}        </div>    </div>    {forelse}        <div class="ac comments-item">\u300c\u6682\u65e0\u8bc4\u4ef7\u300d</div>    {/for}    {if productCommentSummary.defaultGoodCount && productCommentSummary.defaultGoodCountStr && productCommentSummary.defaultGoodCount!=0 && productCommentSummary.defaultGoodCountStr!="0" && (score==0 || score==3)}        <div class="comment-default-good-reputation J-default-reputaion hide">            <span>\u8fd8\u6709${productCommentSummary.defaultGoodCountStr}\u4f4d\u7528\u6237\u7ed9\u4e86\u9ed8\u8ba4\u8bc4\u4ef7</span>        </div>    {/if}    <div class="comment-more J-fold-comment hide" clstag="shangpin|keycount|product|pingjiazhedie">        <span>\u5df2\u5ffd\u7565\u5bf9\u8d2d\u4e70\u5e2e\u52a9\u4e0d\u5927\u7684\u8bc4\u4ef7</span>        <a href="#none">\u67e5\u770b</a>        {if productCommentSummary.defaultGoodCount && productCommentSummary.defaultGoodCountStr && productCommentSummary.defaultGoodCount!=0 && productCommentSummary.defaultGoodCountStr!="0" && (score==0 || score==3)}            <em class="comment-up-triangle"></em>        {/if}    </div>    <div class="com-table-footer">        <div class="ui-page-wrap clearfix">            <div class="ui-page"></div>        </div>    </div>', n.foldCommentItem = '    {for list in comments}    <div class="comment-item" data-guid="${list.guid}" data-top="${list.top}">        <div class="user-column">            <div class="user-info">                {if typeof list.userImageUrl!=="undefined"}                    <img src="//${list.userImageUrl}" width="25" height="25" alt="${list.nickname}" class="avatar"/>                {/if}                ${list|getDisplayName}            </div>            <div class="user-level">                {if typeof list.plusAvailable!="undefined"&&(list.plusAvailable==101||list.plusAvailable==201)}                    <span style="color:{if list.userLevelColor}${list.userLevelColor}{/if}">${list.userLevelName}</span>{if list.userProvince}${list.userProvince}{/if}                {else}                    <span style="color: rgb(136, 136, 136);">{if list.userExpValue!="undefined" && list.userExpValue!=null && list.userExpValue}\u4eac\u4eab\u503c${list.userExpValue}{/if}</span>{if list.userProvince}${list.userProvince}{/if}                {/if}            </div>        </div>        <div class="comment-column J-comment-column">            <div class="comment-star star${list.score}"></div>            <p class="comment-con" title="${list.content}">${list.content.replace(/\\n+/g, "<br />")}</p>            <div class="comment-message">                <div class="order-info">                    {for product in list.productSales}                        <span>${product.saleValue}</span>                    {/for}                    <span>${list.creationTime|formatCommentTime}</span>                </div>            </div>        </div>    </div>    {forelse}        <div class="ac comments-item">\u300c\u6682\u65e0\u6298\u53e0\u8bc4\u4ef7\u300d</div>    {/for}    <div class="com-table-footer">        <div class="ui-page-wrap clearfix">            <div class="ui-page"></div>        </div>    </div>', n.picView = '    <div class="pic-view J-pic-view">        {if isSupportTransform}        <div class="pic-op">            <a class="turn-left J-turn-left" href="#none"><i class="sprite-turn-left"></i>\u5de6\u8f6c</a>            <a class="turn-left J-turn-right" href="#none"><i class="sprite-turn-right"></i>\u53f3\u8f6c</a>        </div>        {/if}        <img src="${imgSrc}"/>        <div class="cursor-prev J-sprite-prev"></div>        <div class="cursor-small J-hide-big-show"></div>        <div class="cursor-next J-sprite-next"></div>    </div>', n.showImgSwitch = '    <div class="com-table-main">        <div class="J-comments-showImgSwitch-wrap comments-showImgSwitch-wrap">            <div class="thumbnails">                <div class="thumb-list">                    <ul class="clearfix"></ul>                    <span class="J-thumb-prev i-prev-btn i-prev-disable"></span>                    <span class="J-thumb-next i-next-btn i-next-disable"></span>                </div>            </div>            <div class="showContent-viewer clearfix">                <div class="photo-viewer">                    <div class="photo-wrap">                        <i></i>                        <img class="J-photo-img">                        <div class="J-cursor-left cursor-left"></div>                        <div class="J-cursor-small cursor-small"></div>                        <div class="J-cursor-right cursor-right"></div>                    </div>                </div>                <div class="J-info-viewer info-viewer">                    <div class="p-comment"></div>                    <div class="features-wrap">                        <div class="p-features">                            <ul></ul>                        </div>                        <div class="user-item-wrap">                            <div class="user-item clearfix">                                <div class="user-name"></div>                            </div>                            <div class="comment-time type-item"></div>                        </div>                    </div>                </div>            </div>        </div>    </div>', n.commentFeatures = '    <div class="p-comment">${commentVo.content}</div>    <div class="features-wrap">        <div class="p-features">            <ul>                {if commentVo.productColor}                    <li title="${commentVo.productColor}">${commentVo.productColor}</li>                {/if}                {if commentVo.productSize}                    <li title="${commentVo.productSize}">${commentVo.productSize}</li>                {/if}            </ul>        </div>        <div class="user-item-wrap">            <div class="user-item clearfix">                {if typeof commentVo.userImageUrl!=="undefined"}                    <img src="//${commentVo.userImageUrl}" width="25" height="25" alt="${commentVo.nickname}" class="user-ico"/>                {else}                    <img src="//misc.360buyimg.com/lib/img/u/${commentVo.userLevelId}.gif" width="25" height="25" alt="${commentVo.nickname}" class="user-ico"/>                {/if}                <div class="user-name" alt="${commentVo|getDisplayName}" title="${commentVo|getDisplayName}">${commentVo|getDisplayName}</div>            </div>            <div class="comment-time type-item" alt="${commentVo.creationTime|timeToDate}" title="${commentVo.creationTime|timeToDate}">${commentVo.creationTime|timeToDate}</div>        </div>    </div>', n.commentTemp = '    <div class="mt">        <h3>\u5546\u54c1\u8bc4\u4ef7</h3>    </div>    <div class="mc">        <div class="comment-info J-comment-info"></div>        <div class="J-comments-list comments-list ETab">            <div class="tab-main small">                <ul class="filter-list">                    <li data-tab="trigger" clstag="shangpin|keycount|product|allpingjia" class="current"><a href="#none">\u5168\u90e8\u8bc4\u4ef7<em>()</em></a></li>                    <li data-tab="trigger" clstag="shangpin|keycount|product|shaidantab"><a href="#none">\u6652\u56fe<em>()</em></a></li>                    <li class="J-addComment" data-tab="trigger" clstag="shangpin|keycount|product|zhuiping"><a href="#none">\u8ffd\u8bc4<em>()</em></a></li>                    <li data-tab="trigger" clstag="shangpin|keycount|product|haoping"><a href="#none">\u597d\u8bc4<em>()</em></a></li>                    <li data-tab="trigger" clstag="shangpin|keycount|product|zhongping"><a href="#none">\u4e2d\u8bc4<em>()</em></a></li>                    <li data-tab="trigger" clstag="shangpin|keycount|product|chaping"><a href="#none">\u5dee\u8bc4<em>()</em></a></li>                    <li class="J-try-report-btn" clstag="shangpin|keycount|product|sybg-bq" style="display: none;"><a href="#try-report">\u8bd5\u7528\u62a5\u544a<em>()</em></a></li>                    <li class="comm-curr-sku" clstag="shangpin|keycount|product|dqshangpinpingjia"><span><input type="checkbox" id="comm-curr-sku"></span><label for= "comm-curr-sku">\u53ea\u770b\u5f53\u524d\u5546\u54c1\u8bc4\u4ef7</label></li>                </ul>                <div class="extra">                    <div class="sort-select J-sort-select">                        <div class="current"><span class="J-current-sortType">\u63a8\u8350\u6392\u5e8f</span><i></i></div>                        <div class="others">                            <div class="curr"><span class="J-current-sortType">\u63a8\u8350\u6392\u5e8f</span><i></i></div>                            <ul>                                <li class="J-sortType-item" data-sorttype="5" clstag="shangpin|keycount|product|morenpaixu">\u63a8\u8350\u6392\u5e8f</li>                                <li class="J-sortType-item" data-sorttype="6" clstag="shangpin|keycount|product|shijianpaixu">\u65f6\u95f4\u6392\u5e8f</li>                            </ul>                        </div>                    </div>                </div>            </div>            <div class="tab-con">                <div id="comment-0" data-tab="item">\u5168\u90e8</div>                <div id="comment-1" data-tab="item" class="hide"><div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>                <div id="comment-2" data-tab="item" class="hide"><div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>                <div id="comment-3" data-tab="item" class="hide"><div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>                <div id="comment-4" data-tab="item" class="hide"><div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>                <div id="comment-5" data-tab="item" class="hide"><div class="iloading">\u6b63\u5728\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019...</div></div>            </div>        </div>    </div>';
    var o = {0: 0, 1: 4, 2: 5, 3: 3, 4: 2, 5: 1}, r = {
        formatDay: function (t) {
            return 0 === t ? "\u5f53\u5929" : t + "\u5929\u540e"
        }, formatCommentTime: function (t) {
            return t ? t.substring(0, t.lastIndexOf(":")) : ""
        }, timeToDate: function (t) {
            return t ? t.substring(0, t.indexOf(" ")).replace(/-/g, ".") : ""
        }, getDisplayName: function (t) {
            return t.nickname ? t.anonymousFlag && 1 == t.anonymousFlag ? t.nickname.replace(t.nickname.substring(1, t.nickname.length - 1), "***") : t.nickname : t.pin
        }, getReplyName: function (t) {
            return t.venderShopInfo && t.venderShopInfo.title ? t.venderShopInfo.title : t.pin
        }
    }, c = {
        inited: !1, init: function (t) {
            var e = this;
            return e.changeTemplate(), e.$commRate = $(".J-comment-info"), e.$commList = $(".J-comments-list"), e.$commCurrSku = $("#comm-curr-sku"), e.$wrap = $("#comment-0"), e.sku = t.skuid, e.cfg = t, e.isShadowSku = void 0 !== e.cfg.isShadowSku ? e.cfg.isShadowSku : 0, e.isSupportTransform = "transform" in document.documentElement.style, e.sortType = 5, e.isFirstLoad = !0, e.disabledSortType = !1, e.pageNav = e.$wrap.find(".ui-page"), e.sortTypeObj = {
                5: "\u63a8\u8350\u6392\u5e8f",
                6: "\u65f6\u95f4\u6392\u5e8f"
            }, e.pager = null, e.currCommentType = 0, e.isTagAvailable = !1, e.rid = 0, e.inited = !0, 0 == t.addComments && $(".J-addComment").hide(), e.bindEvent(), e
        }, changeTemplate: function () {
            $("#comment").html(n.commentTemp), i.fire({type: "onCommentTemplateReady"})
        }, setImageList: function (t) {
            var e = this,
                i = "//club.jd.com/discussion/getProductPageImageCommentList.action?productId=" + e.sku + "&isShadowSku=" + e.isShadowSku;
            if (e.currSku && (i = "//club.jd.com/discussion/getSkuProductPageImageCommentList.action?productId=" + e.sku + "&isShadowSku=" + e.isShadowSku), 0 == e.$commList.find(".current").attr("data-num")) return t.html('<div class="ac comments-item">\u300c\u6682\u65e0\u6652\u56fe\u300d</div>'), !1;
            var o = a.wideVersion ? 10 : 7;
            t.html(n.showImgSwitch), e.shopImgSwitch = window.shopImgSwitch = new s({
                imgNum: o,
                wideVersion: a.wideVersion,
                showImgSwitch: ".comments-showImgSwitch-wrap",
                url: i,
                onReady: function (i) {
                    e.$commList.find('[data-tab="trigger"] a em').eq(1).html("(" + i + ")"), i || t.html('<div class="ac comments-item">\u300c\u6682\u65e0\u6652\u56fe\u300d</div>')
                },
                onUpdate: function (t, i) {
                    var a = e.$commList.find(".J-info-viewer");
                    t._MODIFIERS = r, 0 == t.commentVo.id ? a.hide() : (a.show(), a.html(n.commentFeatures.process(t))), i && i.imgComments && e.$commList.find('[data-tab="trigger"] a em').eq(1).html("(" + i.imgComments.imgCommentCount + ")")
                }
            })
        }, bindEvent: function () {
            var t = this;
            t.$commList.ETab({
                onSwitch: function (e) {
                    var i = this.items.eq(e), a = t.currCommentType = o[e];
                    t.$wrap = i, t.updateSortType(a), t.rid = 0, 1 == e && "1" !== i.attr("data-loaded") && (t.setImageList(i), i.attr("data-loaded", "1")), t.getData(i, a, 0)
                }
            }), pageConfig.commentsList_TAB = t.$commList.data("ETab"), t.$commList.delegate(".J-nice", "click", $.proxy(this.handleOperation, this)), t.$commList.delegate(".J-report", "click", $.proxy(this.handleOperation, this)), t.$commList.delegate(".J-fold-comment", "click", $.proxy(this.handleFoldComment, this)), t.$commList.delegate(".J-thumb-img", "click", function () {
                var e = $(this), i = (e.find("img").attr("src"), e.parents(".J-pic-list")),
                    a = i.siblings(".J-pic-view-wrap");
                t.hadnlePhotoSwitch(a, e.index(), 0)
            }), t.$commList.delegate(".J-sprite-prev", "click", function () {
                var e = $(this), i = e.parents(".J-pic-view-wrap"), a = i.attr("data-ind");
                a--, t.hadnlePhotoSwitch(i, a)
            }), t.$commList.delegate(".J-sprite-next", "click", function () {
                var e = $(this), i = e.parents(".J-pic-view-wrap"), a = i.attr("data-ind");
                a++, t.hadnlePhotoSwitch(i, a)
            }), t.$commList.delegate(".J-hide-big-show", "click", function () {
                var t = $(this), e = t.parents(".J-pic-view-wrap");
                e.html(""), e.siblings(".J-pic-list").find(".J-thumb-img").removeClass("current")
            }), t.isSupportTransform && (t.$commList.delegate(".J-turn-left", "click", function () {
                var e = $(this), i = e.parents(".J-pic-view-wrap");
                t.hadnleRotate(i, !0)
            }), t.$commList.delegate(".J-turn-right", "click", function () {
                var e = $(this), i = e.parents(".J-pic-view-wrap");
                t.hadnleRotate(i, !1)
            })), t.$commCurrSku.unbind("change").bind("change", $.proxy(this.handleCheck, this)), t.$commList.delegate(".J-sortType-item", "click", function () {
                var e = $(this), i = e.attr("data-sorttype");
                t.userSortType = t.sortType = parseInt(i);
                var a = t.$commList.data("ETab").index, s = o[a];
                t.getData($("#comment-" + a), s, 0, i)
            }), $.browser.isIE6() && (t.$commList.delegate(".J-sort-select", "mouseenter", function () {
                $(this).find(".others").show()
            }), t.$commList.delegate(".J-sort-select", "mouseleave", function () {
                $(this).find(".others").hide()
            }))
        }, handleCheck: function (t) {
            var e = this;
            e.currSku = !!$(t.target).attr("checked"), e.$commList.find('[data-tab="item"]').removeAttr("data-loaded"), e.getData(e.wrap, e.currCommentType);
            var i = e.$commList.find("#comment-1");
            i.removeAttr("data-loaded"), e.setImageList(i)
        }, hadnleRotate: function (t, e) {
            var i = t.attr("data-rotation"), a = t.find(".J-pic-view"), s = t.find("img");
            e ? i-- : i++, i < 0 && (i += 4);
            var n = t.find("img").width(), o = t.find("img").height(), r = n, c = o, l = 0, d = 0;
            1 != i && 3 != i || (r = o, c = n, l = (o - n) / 2, d = (n - o) / 2), a.css({
                paddingTop: Math.max(0, (0 - c) / 2),
                paddingBottom: Math.max(0, (0 - c) / 2),
                width: r,
                height: c
            }), t.attr("data-rotation", i %= 4), s.css({
                transform: "rotate(" + 90 * i + "deg)",
                marginLeft: l,
                marginTop: d
            })
        }, resetRoate: function (t) {
            var e = t.find(".J-pic-view"), i = t.find("img");
            e.css({paddingTop: 0, paddingBottom: 0, width: "auto", height: "auto"}), i.css({
                transform: "rotate(0deg)",
                marginLeft: 0,
                marginTop: 0
            })
        }, hadnlePhotoSwitch: function (t, e) {
            var i = this, a = t.siblings(".J-pic-list").find(".J-thumb-img"), s = a.eq(e),
                o = s.find("img").attr("src");
            o = o.replace("48x48", "616x405"), o = o.replace("n0", "shaidan"), t.find(".J-pic-view").length ? t.find("img").attr("src", o) : t.html(n.picView.process({
                imgSrc: o,
                isSupportTransform: i.isSupportTransform
            })), t.attr("data-rotation", 0), t.attr("data-ind", e), a.removeClass("current"), s.addClass("current");
            var r = t.find(".J-sprite-prev"), c = t.find(".J-sprite-next");
            0 == e && 1 == a.length ? (c.hide(), r.hide()) : e <= 0 ? (r.hide(), c.show()) : e + 1 >= a.length ? (c.hide(), r.show()) : (c.show(), r.show()), i.resetRoate(t)
        }, getData: function (t, e, i, a, s) {
            var n = this;
            n.type = void 0 === e ? n.type : e || 0, n.page = void 0 === i ? n.page : i || 0, n.sortType = a || n.sortType, s ? s = this.rid || 0 : this.clearTag(), n.commRateLoaded = !1;
            var o = "//sclub.jd.com/comment/productPageComments.action";
            n.currSku && (o = "//club.jd.com/comment/skuProductPageComments.action");
            var r = n.getCallbackName();
            $.ajax({
                url: o,
                data: {
                    productId: n.sku,
                    score: n.type,
                    sortType: n.sortType,
                    page: n.page,
                    pageSize: 10,
                    isShadowSku: n.isShadowSku,
                    rid: s,
                    fold: 1
                },
                dataType: "jsonp",
                cache: !0,
                jsonpCallback: r,
                success: function (t) {
                    n.setData(t)
                }
            })
        }, getCallbackName: function () {
            var t = "fetchJSON_comment", e = readCookie("jwotest_product"), i = pageConfig.product.commentVersion;
            return t += e || "98", t += i ? "vv" + i : ""
        }, setData: function (t) {
            var e = this;
            return t._MODIFIERS = r, t.rid = this.rid, this.isTagAvailable = this.checkTag(t), 4 === this.type ? this.setCommentCount(t) : (t || (this.$wrap.html("\u3000\u6682\u65e0\u8bc4\u4ef7"), this.commRate.find(".mc").html("\u3000\u6682\u65e0\u8bc4\u4ef7")), void 0 === t.comments ? void this.$wrap.html('<div class="norecode"> \u6682\u65e0\u5546\u54c1\u8bc4\u4ef7\uff01</div>') : (!1 === this.commRateLoaded && this.setCommRate(t), this.setCommentCount(t), this.$wrap.html(n.commentItem.process(t)), this.$pageNav = this.$wrap.find(".ui-page"), this.bindTagClick(), this.setPageNav(t), this.setSortSelect(t), void setTimeout(function () {
                e.setFoldComment(t)
            }, 100)))
        }, bindTagClick: function () {
            this.isTagAvailable ? (this.$commRate.undelegate("click").delegate(".tag-list span", "click", $.proxy(this.handleTagClick, this)), this.$commRate.find(".tag-list").addClass("tag-available")) : this.$commRate.find(".tag-list").removeClass("tag-available")
        }, handleTagClick: function (t) {
            var e = $(t.currentTarget);
            this.rid = e.attr("data-rid");
            var i = this.$commList.data("ETab"), a = i.index;
            i.go(0, !0), this.$wrap = $("#comment-0"), this.$commCurrSku.attr("checked", !1), this.currSku = !1, this.getData($("#comment-" + a), this.type, 0, this.sortType, this.rid), this.resetTagHL(), e.addClass("selected")
        }, resetTagHL: function () {
            this.$commRate.find("span").removeClass("selected")
        }, clearTag: function () {
            this.rid = 0, this.resetTagHL()
        }, checkTag: function (t) {
            return t && t.hotCommentTagStatistics && t.hotCommentTagStatistics.length && t.hotCommentTagStatistics[0].canBeFiltered
        }, setCommentCount: function (t) {
            var e = this, i = e.$commList.find('[data-tab="trigger"]'), a = t.productCommentSummary;
            t.imageListCount = t.imageListCount || 0, i.eq(0).attr("data-num", a.commentCount).find("em").html("(" + a.commentCountStr + ")"), pageConfig.commentsList_TAB.items.eq(pageConfig.commentsList_TAB.index).is("#comment-1") || e.imgListCountLoaded || (i.eq(1).attr("data-num", t.imageListCount).find("em").html("(" + t.imageListCount + ")"), e.imgListCountLoaded = !0), i.eq(2).attr("data-num", a.afterCount).find("em").html("(" + a.afterCountStr + ")"), i.eq(3).attr("data-num", a.goodCount).find("em").html("(" + a.goodCountStr + ")"), i.eq(4).attr("data-num", a.generalCount).find("em").html("(" + a.generalCountStr + ")"), i.eq(5).attr("data-num", a.poorCount).find("em").html("(" + a.poorCountStr + ")")
        }, setCommRate: function (t) {
            var e = this;
            t.vTagStatisticsResult = [];
            for (var i in t.vTagStatistics) {
                var a = t.vTagStatistics[i];
                a.sort(function (t, e) {
                    return t.isTopic ? -1 : e.tagRate - t.tagRate
                });
                var s = a.slice(2), o = [];
                for (var i in s) o.push(s[i].name);
                t.vTagStatisticsResult.push({
                    name: a[0].name,
                    maxName: a[1].name,
                    maxRate: 1e4 * a[1].tagRate / 100,
                    otherName: o.join("\u6216")
                })
            }
            e.$commRate.html(n.commentRate.process(t)), e.commRateLoaded = !0
        }, handleFoldComment: function () {
            l.get(0, function () {
                l.set()
            })
        }, isLastPage: function () {
            if (this.pager) {
                var t = this.pager.options;
                return t.currentPage === t.totalPage
            }
            return !0
        }, setFoldComment: function (t) {
            if (!this.isLastPage() && 0 != t.maxPage || this.currSku) this.$wrap.find(".J-fold-comment").hide(); else {
                l.init(this.$wrap);
                var e = $(".J-default-reputaion");
                e.length && e.show()
            }
        }, setPageNav: function (t) {
            function e(t) {
                if (!t) return !1;
                var e = t.el.find("span:last");
                e.index() > 5 && e.next().remove()
            }

            function i(t) {
                t.find("[rel]").each(function () {
                    var t = $(this).attr("rel");
                    $(this).attr("clstag", "shangpin|keycount|product|pinglunfanye-" + t)
                }), t.find(".ui-pager-prev").attr("clstag", "shangpin|keycount|product|pinglunfanye-frontpage"), t.find(".ui-pager-next").attr("clstag", "shangpin|keycount|product|pinglunfanye-nextpage")
            }

            var a = this, s = a.$commList.data("ETab").index;
            a.pager = a.$pageNav.pager({
                total: 10 * t.maxPage,
                pageSize: 10,
                currentPageClass: "ui-page-curr",
                currentPage: a.page + 1,
                pageHref: "#comment",
                prevClass: "ui-pager-prev",
                nextClass: "ui-pager-next",
                prevText: "\u4e0a\u4e00\u9875",
                nextText: "\u4e0b\u4e00\u9875",
                callback: function (i) {
                    var n = i - 1;
                    e(a.pager), a.getData($("#comment-" + s), t.score, n, a.sortType, a.rid || 0)
                }
            }), setTimeout(function () {
                e(a.pager)
            }, 100), setTimeout(function () {
                i(a.$pageNav)
            }, 500)
        }, handleOperation: function (t) {
            var i = this, a = $(t.currentTarget);
            "1" === a.attr("data-login") && e({
                modal: !0, complete: function () {
                    a.hasClass("J-nice") && i.agree(a), a.hasClass("J-report") && i.report(a)
                }
            })
        }, report: function (t) {
            var e = t.parents(".comment-item").attr("data-guid");
            d.init(e)
        }, agree: function (t) {
            var e = t.attr("data-guid");
            $.ajax({
                url: "//club.jd.com/index.php",
                data: {mod: "ProductComment", action: "saveCommentUserfulVote", commentId: e, isUseful: !0},
                dataType: "jsonp",
                success: function (e) {
                    if (1 == e.status) {
                        var i = parseInt(t.attr("title")) + 1;
                        t.attr("title", i), t.html("\u70b9\u8d5e\uff08" + i + "\uff09"), t.addClass("praised")
                    } else alert("\u53ea\u80fd\u70b9\u8d5e\u4e00\u6b21\u5466")
                }
            })
        }, setSortSelect: function (t) {
            var e = this, i = $(".J-sort-select");
            $(".J-current-sortType").html(e.sortTypeObj[t.soType]), $(".J-sort-select").show(), e.disabledSortType = t.soType != e.sortType, e.isFirstLoad = !1, e.sortType = t.soType, i.toggleClass("disable", e.disabledSortType)
        }, updateSortType: function (t) {
            var e = this, i = $(".J-sort-select");
            4 == t && (i.addClass("disable"), $(".J-current-sortType").html(e.sortTypeObj[6]))
        }
    }, l = {
        init: function (t) {
            this.$wrap = t, this.isOpen = !1, this.page = 0, this.get()
        }, get: function (t, e) {
            var i = this;
            e = e || function () {
            }, this.page = t || 0, $.ajax({
                url: "//club.jd.com/comment/getProductPageFoldComments.action",
                data: {productId: c.sku, score: c.type, sortType: c.sortType, page: this.page, pageSize: 5},
                dataType: "jsonp",
                success: function (t) {
                    i.handleData(t), e()
                }
            })
        }, handleData: function (t) {
            var e = this.$wrap.find(".J-fold-comment");
            t && t.comments && t.comments.length ? (this.data = t, e.show()) : e.hide()
        }, set: function (t) {
            t = t || this.data, t._MODIFIERS = r;
            var e = this, i = n.foldCommentItem.process(t);
            this.isOpen ? (this.$el.html(i), this.setPager(t)) : $("body").dialog({
                type: "html",
                title: "\u5df2\u5ffd\u7565\u7684\u8bc4\u4ef7",
                fixed: !0,
                width: 850,
                height: 520,
                source: '<div style="overflow-y: auto;height: 100%;overflow-x: hidden;"><div id="fold-comment" class="comment comment-layer">' + i + "</div></div>",
                onCancel: function () {
                    e.isOpen = !1, e.data = {}, e.page = 1
                },
                onReady: function () {
                    e.setPager(t)
                }
            })
        }, setPager: function (t) {
            var e = this;
            this.isOpen = !0, this.$el = $("#fold-comment"), this.$pageNav = this.$el.find(".ui-page"), this.pager = this.$pageNav.pager({
                total: 5 * t.maxPage,
                pageSize: 5,
                currentPageClass: "ui-page-curr",
                currentPage: this.page + 1,
                pageHref: "#none",
                prevClass: "ui-pager-prev",
                nextClass: "ui-pager-next",
                prevText: "\u4e0a\u4e00\u9875",
                nextText: "\u4e0b\u4e00\u9875",
                callback: function (t) {
                    e.get(t - 1, function () {
                        e.set()
                    })
                }
            })
        }
    }, d = {
        init: function (t) {
            this.guid = t, this.get(), this.bindEvent()
        }, bindEvent: function () {
            this.$el = $("#jubao"), this.$el.find(".J-ok").unbind().bind("click", $.proxy(this.handleClick, this)), this.$el.find(".J-wrap-tags span").unbind().bind("click", $.proxy(this.handleTagClick, this)), this.$el.find("textarea").unbind().bind("change keyup", $.proxy(this.handleChange, this))
        }, handleChange: function (t) {
            var e = this.$el.find(".J-curr"), i = $(t.currentTarget), a = i.val();
            e.text(a.length), a.length > 200 && i.val(a.substr(0, 200))
        }, handleTagClick: function (t) {
            this.$el.find(".J-wrap-tags span").removeClass("selected"), $(t.currentTarget).addClass("selected")
        }, handleClick: function () {
            this.validateField() && this.submit()
        }, submit: function () {
            var t = this.$el.find(".selected").attr("data-id"),
                e = this.$el.find("textarea").val().replace(/<script>|<\/script>/gi, "");
            $.ajax({
                url: "//like-web.jd.com/business/report/submitReportDetailForPc",
                data: {businessId: this.guid, systemId: 2, reasonId: t, content: e},
                dataType: "jsonp",
                success: $.proxy(this.handleSubmit, this)
            })
        }, handleSubmit: function (t) {
            $.closeDialog(), t && t.success && $("body").dialog({
                type: "html",
                title: "\u4e3e\u62a5\u6210\u529f",
                source: '                    <div class="dialog_jubao_suc">                        <div class="icon"></div>                        <div class="tt">\u4e3e\u62a5\u6210\u529f</div>                        <div class="def">\u6211\u4eec\u4f1a\u5c3d\u5feb\u5904\u7406\u60a8\u7684\u53cd\u9988</div>                        <span class="btn_close" onclick="$.closeDialog()">\u5173\u95ed</span>                    </div>'
            }), t.success || 11 !== t.errorCode || $("body").dialog({
                type: "html", title: "\u5df2\u4e3e\u62a5\u8fc7",
                source: '                    <div class="dialog_jubao_fail">                        <div class="icon"></div>                        <div class="tt">\u62b1\u6b49\uff0c\u60a8\u5df2\u4e3e\u62a5\u8fc7\u6b64\u8bc4\u4ef7</div>                        <div class="def">\u4e0d\u80fd\u91cd\u590d\u4e3e\u62a5\u54e6~</div>                        <span class="btn_close" onclick="$.closeDialog()">\u5173\u95ed</span>                    </div>'
            }), t.success || 10 !== t.errorCode || $("body").dialog({
                type: "html",
                title: "\u4e3e\u62a5\u8fc7\u4e8e\u9891\u7e41",
                source: '                    <div class="dialog_jubao_fail">                        <div class="icon"></div>                        <div class="tt">\u62b1\u6b49\uff0c\u60a8\u4e3e\u62a5\u8fc7\u4e8e\u9891\u7e41</div>                        <div class="def">24 \u5c0f\u65f6\u5185\u6700\u591a\u4e3e\u62a53\u6b21~</div>                        <span class="btn_close" onclick="$.closeDialog()">\u5173\u95ed</span>                    </div>'
            })
        }, validateField: function () {
            return !(this.$el.find(".J-wrap-tags .selected").length < 1) || (this.showMessage("\u8bf7\u5728\u6807\u7b7e\u4e2d\u9009\u62e9\u4e3e\u62a5\u539f\u56e0"), !1)
        }, showMessage: function (t) {
            $(".J-fop-tip").show().find(".J-tip-text").text(t)
        }, hideMessage: function () {
            $(".J-fop-tip").hide()
        }, get: function () {
            $.ajax({
                url: "//like-web.jd.com/business/report/getReportReasonList",
                data: {systemId: 2},
                dataType: "jsonp",
                success: $.proxy(this.popUp, this)
            })
        }, popUp: function (t) {
            if (t && t.result && t.success) {
                var e = this;
                $("body").dialog({
                    type: "html",
                    mainId: "gift-pool-popup",
                    width: 530,
                    title: "\u9009\u62e9\u4e3e\u62a5\u539f\u56e0",
                    source: '            <div id="jubao" class="jubao">                <div class="wrap-tags J-wrap-tags">                    {for item in result.reasonList}                    <span class="tag" data-id="${item.id}">${item.reason}</span>                    {/for}                </div>                <div class="f-textarea">                    <textarea name="" id="" placeholder="\u8bf4\u660e\u8be6\u7ec6\u539f\u56e0\uff0c\u5e2e\u52a9\u6211\u4eec\u66f4\u5feb\u5730\u5904\u7406\u4e3e\u62a5\u5185\u5bb9\uff08\u9009\u586b\uff09"></textarea>                    <div class="textarea-ext">                        <span class="curr J-curr">0</span> / 200                    </div>                </div>                <div class="J-fop-tip fop-tip hide"><i class="tip-icon"></i><em class="J-tip-text tip-text">\u8bf7\u5728\u6807\u7b7e\u4e2d\u9009\u62e9\u4e3e\u62a5\u539f\u56e0</em></div>                <div class="btns">                    <span class="J-cancel btn_cancle" onclick="$.closeDialog()">\u53d6\u6d88</span>                    <span class="J-ok btn_sure">\u786e\u5b9a</span>                    <br class="clr">                </div>            </div>'.process(t),
                    onReady: function () {
                        e.bindEvent()
                    }
                })
            }
        }
    };
    window.CommentNew = c, module.exports.__id = "comment", module.exports.init = t, module.exports.CommentNew = c
});
