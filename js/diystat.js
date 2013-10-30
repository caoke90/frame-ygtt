/**
 * @author wangchangxin@jd.com
 * @date 2013-03-08
 */

/*
 * JSON
 */
(function ($) {
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
    $.toJSON = typeof JSON === 'object' && JSON.stringify ? JSON.stringify : function (o) {
        if (o === null) {
            return 'null';
        }
        var type = typeof o;
        if (type === 'undefined') {
            return undefined;
        }
        if (type === 'number' || type === 'boolean') {
            return '' + o;
        }
        if (type === 'string') {
            return $.quoteString(o);
        }
        if (type === 'object') {
            if (typeof o.toJSON === 'function') {
                return $.toJSON(o.toJSON());
            }
            if (o.constructor === Date) {
                var month = o.getUTCMonth() + 1,
                    day = o.getUTCDate(),
                    year = o.getUTCFullYear(),
                    hours = o.getUTCHours(),
                    minutes = o.getUTCMinutes(),
                    seconds = o.getUTCSeconds(),
                    milli = o.getUTCMilliseconds();
                if (month < 10) {
                    month = '0' + month;
                }
                if (day < 10) {
                    day = '0' + day;
                }
                if (hours < 10) {
                    hours = '0' + hours;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                if (milli < 100) {
                    milli = '0' + milli;
                }
                if (milli < 10) {
                    milli = '0' + milli;
                }
                return '"' + year + '-' + month + '-' + day + 'T' +
                    hours + ':' + minutes + ':' + seconds +
                    '.' + milli + 'Z"';
            }
            if (o.constructor === Array) {
                var ret = [];
                for (var i = 0; i < o.length; i++) {
                    ret.push($.toJSON(o[i]) || 'null');
                }
                return '[' + ret.join(',') + ']';
            }
            var name,
                val,
                pairs = [];
            for (var k in o) {
                type = typeof k;
                if (type === 'number') {
                    name = '"' + k + '"';
                } else if (type === 'string') {
                    name = $.quoteString(k);
                } else {
                    continue;
                }
                type = typeof o[k];
                if (type === 'function' || type === 'undefined') {
                    continue;
                }
                val = $.toJSON(o[k]);
                pairs.push(name + ':' + val);
            }
            return '{' + pairs.join(',') + '}';
        }
    };
    $.evalJSON = typeof JSON === 'object' && JSON.parse
        ? JSON.parse
        : function (src) {
        return eval('(' + src + ')');
    };
    $.secureEvalJSON = typeof JSON === 'object' && JSON.parse
        ? JSON.parse
        : function (src) {

        var filtered =
            src
                .replace(/\\["\\\/bfnrtu]/g, '@')
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                .replace(/(?:^|:|,)(?:\s*\[)+/g, '');

        if (/^[\],:{}\s]*$/.test(filtered)) {
            return eval('(' + src + ')');
        } else {
            throw new SyntaxError('Error parsing JSON, source is not valid.');
        }
    };
    $.quoteString = function (string) {
        if (string.match(escapeable)) {
            return '"' + string.replace(escapeable, function (a) {
                var c = meta[a];
                if (typeof c === 'string') {
                    return c;
                }
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    };
})(jQuery);


var recordDiyOrder = {
    cartKey: "__diyc",
    orderKey: "__diyo",
    timeout: 172800000,
    getCookieObject: function (_key, _default) {
        var cookieStr = getCookie(_key);
        if (null != cookieStr) {
            return $.evalJSON(cookieStr);
        }
        return _default || {};
    },
    setDiyWare: function (_wareid, _num) {
        var result = {};
        result[_wareid] = _num;
        setCookieMills(this.cartKey, $.toJSON(result), this.timeout);
    },
    appendDiyWareInfo: function (_obj) {
        var rs, cookieDiyWares = getCookie(this.cartKey);
        if (null == cookieDiyWares) {
            rs = [];
        } else {
            rs = $.evalJSON(cookieDiyWares);
        }
        rs.push(_obj);
        rs = $.toJSON(rs);
        setCookieMills(this.cartKey, rs, this.timeout);
    },
    getDomOrderInfo: function () {
        var rs = {};
        $(".Table .align_Center:gt(0)").each(function () {
            var tdDom = $(this).find("td");
            rs[$(tdDom[0]).text()] = $(tdDom[6]).text();
        });
        return rs;
    },
    //在订单页面， 与cookie中Diy商品 求交集，数量以页面中为准
    getOrderDiyInfo: function () {
        var rs = [];
        //cart cookie diy array
        var diyCookieCartWares = recordDiyOrder.getCookieObject(this.cartKey, []);
        if (diyCookieCartWares.length == 0) return rs;
        //dom order
        var orderWares = this.getDomOrderInfo();

        var innerWare, allDiyCookieWares = {};
        for (var i = 0; i < diyCookieCartWares.length; i++) {
            // all wares of one collocate
            innerWare = diyCookieCartWares[i][diyWareInfo.info];
            var orderDiyWares = {};
            var flag = false;
            for (var ow  in orderWares) {
                if (!!innerWare[ow] && !allDiyCookieWares[ow]) {
                    orderDiyWares[ow] = orderWares[ow];
                    allDiyCookieWares[ow] = orderWares[ow];  //防止不同配置单都有同商品重复统计
                    flag = true;
                }
            }
            // if orderDiyWares is not empty
            if (flag) {
                var temp = diyCookieCartWares[i];
                temp[diyWareInfo.info] = orderDiyWares;
                rs.push(temp);
            }
        }
        return rs;
    },
    ajaxDiyCart: function (_obj) {
        $.getJSON("http://diy.jd.com/stats/toCartStats.action", {"param": $.toJSON(_obj)}, function (_data) {
        });
    },
    ajaxDiyOrder: function (_option) {
        var diyOrderInfo = this.getCookieObject(this.orderKey, []);
        if (diyOrderInfo.length == 0) return false;
        var data = {"param": $.toJSON(diyOrderInfo), "diypin": getCookie("pin")};
        if (!!_option)  $.extend(data, _option);

        $.getJSON("http://diy.jd.com/stats/toOrderStats.action", data, function (_data) {
        });
        deleteCookie(recordDiyOrder.orderKey);
    },
    add2Cart: function (_url) {
        var urlWareInfo = diyUrlUtil.getUrlWareInfo(_url);
        this.appendDiyWareInfo(urlWareInfo);
        this.ajaxDiyCart(urlWareInfo);
    }
};

var diyUrlUtil = {
    getQueryStringRegExp: function (_param, _url) {
        var reg = new RegExp("(^|\\?|&)" + _param + "=([^&]*)(\\s|&|$)", "i");
        var url = _url || location.href;
        if (reg.test(url)) return RegExp.$2;
        return null;
    },
    getUrlWareInfo: function (_url) {
        var wareStr = this.getQueryStringRegExp("allwids", _url) || this.getQueryStringRegExp("wids", _url);
        var numStr = this.getQueryStringRegExp("allnums", _url) || this.getQueryStringRegExp("nums", _url);

        var pid = this.getQueryStringRegExp("pid", _url);
        var cid = this.getQueryStringRegExp("dscid", _url);
        var recType = this.getQueryStringRegExp("recType", _url);

        var result = {};
        if (null != pid) result[diyWareInfo.pid] = pid;
        if (null != cid) result[diyWareInfo.cid] = cid;
        if (null != recType) result[diyWareInfo.type] = recType;

        var wareArray = wareStr.split(",");
        var numArray = numStr.split(",");
        if (wareArray.length == numArray.length) {
            var info = {};
            for (var i = 0; i < wareArray.length; i++) {
                info[wareArray[i]] = numArray[i];
            }
        }
        result[diyWareInfo.info] = info;
        return result;
    }
};

function onloadOrderPageHandler() {
    deleteCookie(recordDiyOrder.orderKey);
}

//bind submit operate  and after  submit
function submitOrderDiyHandler() {
    deleteCookie(recordDiyOrder.orderKey);
    var orderDiyInfo = recordDiyOrder.getOrderDiyInfo();
    if (orderDiyInfo.length > 0)
        setCookieMills(recordDiyOrder.orderKey, $.toJSON(orderDiyInfo), recordDiyOrder.timeout);
}

var diyWareInfo = {
    "cid": "cid",
    "info": "info",
    "pid": "pid",
    "type": "type"
};



$(function () {
    $("#submit").click(function () {
        try {
            submitOrderDiyHandler();
        } catch (err) {
        }
    });


    (function doDiyStat() {
        try {
            var href = window.location.href;
            var orderid;
            //货到付款
            if (href.indexOf("getSuccessOrder") != -1) {
                orderid = diyUrlUtil.getQueryStringRegExp("orderid", href);
                recordDiyOrder.ajaxDiyOrder({"orderid": orderid });
            }
            //在线支付 | 公司转账 | 邮局汇款
            else if (href.indexOf("bankChoose_Common") != -1 || href.indexOf("succeed_PayEnterprise") != -1 || href.indexOf("Succeed_PayPost") != -1) {
                orderid = diyUrlUtil.getQueryStringRegExp("id", href);
                recordDiyOrder.ajaxDiyOrder({"orderid": orderid });
            }
        } catch (err) {
        }
    })();

});
try {
    if (typeof $.livequery != "undefined") {
        $(".diy-random").livequery('click', function () {
            var url = $(this).attr("href");
            window.location = url;
            recordDiyOrder.add2Cart(url);
            return false;
        });
    }
} catch (err) {
//    alert(err);
}