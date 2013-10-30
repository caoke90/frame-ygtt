$(function () {
    $("#cb_All").click(function(){SelAllProduct();});
    ShowCartshopInfo();
    SameProductList();
});

function ShowCartshopInfo() {
    ShowShopCartProductList();
}

function ShowShopCartProductList() {
    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/ShowShopCartSpList",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var productGiftsArr = data.d.split('[#]');
            data = jQuery.parseJSON(productGiftsArr[0]);
            var spTolNum = 0, spTolJe = 0;
            var selNum = 0, recNum = 0;
            var s = "";
            var zkje = 0;
            $.each(data, function (i, item) {
                $("#id_cartsplist").html("");
                var spsl = parseFloat(item.XSSL);
                var lsdj = parseFloat(item.LSDJ);
                var spZje = parseFloat(spsl * lsdj);
                var spnameinfo = item.SPSX.replace("无属性", "");
                var selbjStr = "";
                var selFlag = "0";
                recNum++;
                if (item.SELBJ == 1) {
                    selNum++;
                    spTolNum = parseFloat(spTolNum) + parseFloat(spsl);
                    spTolJe = parseFloat(spTolJe) + parseFloat(spZje);
                    selbjStr = "checked='true'";
                    selFlag = "1";
                    zkje = parseFloat(zkje) + parseFloat(item.YXZKJE);
                }
                else {
                    selbjStr = "";
                    selFlag = "0";
                }
                s += "<tr><td><div  class=\"d1\"><input name=\"\" onclick='SelProductCheck(\"" + selFlag + "\",\"" + item.SP_ID + "\")' type=\"checkbox\" " + selbjStr + " value=\"\" /></div></td>"
                     + "<td><div  class=\"d2\"><a href='products.aspx?spid=" + item.SPID + "' target='_blank'><img title='" + spnameinfo + "' src=\"" + item.IMGDIR + "\"  data-original=\"" + item.IMGDIR + "\" width=\"52\" height=\"52\" /></a><p><a href='products.aspx?spid=" + item.SPID + "' target='_blank'>" + spnameinfo + "</a></div></td>"
                     + "<td><div class=\"d3\">￥" + parseFloat(item.LSDJ).toFixed(2) + "</div></td>"
                     + "<td><div  class=\"d4\"><a style=\"cursor:pointer\" onclick='NumMinus(\"sl_" + item.SP_ID + "\")'><q>-</q></a><input id='sl_" + item.SP_ID + "' onblur='EditNum(\"sl_" + item.SP_ID + "\")' type='text' value='" + spsl + "'/><a style=\"cursor:pointer\" onclick='NumAdd(\"sl_" + item.SP_ID + "\")'><q>+</q></a></div></td>"
                     + "<td><div class=\"d5\">￥" + parseFloat(spZje).toFixed(2) + "</div></td>"
                     + "<td><div  class=\"d6\"><a style=\"cursor:pointer\" onclick='DeleteProduct(" + item.SP_ID + ")'><b>删除</b></a><a style=\"cursor:pointer\" onclick='AddFavorite(" + item.SP_ID + ")'><b>收藏</b></a></td>"
                     + "</tr>";
            });
            if (selNum == recNum) {
                $("#cb_All").attr("checked", true);
            }
            else {
                $("#cb_All").attr("checked", false);
            }

            //赠品 
            var dataGiftsStr = "";
            var giftTip = "";

            if (productGiftsArr[1] != "Empty") {
                var dataGifts = jQuery.parseJSON(productGiftsArr[1]);
                $.each(dataGifts, function (i, item) {
                    if (item.CXFS == 1 || item.CXFS == 2 || item.CXFS == 3) {
                        if (item.SELBJ == 1) {
                            spTolNum = parseFloat(spTolNum) + parseFloat(item.SELSL);
                            s += "<tr><td class=\"d1\"></td>"
                             + "<td class=\"d2\"><a><img title='" + item.NAME + "' src=\"" + item.IMGDIR + "\" width=\"52\" height=\"52\" /></a><p><font color=\"red\">[赠品]</font><font color=\"#5E5E5E\"><a>" + item.NAME + "</a></p></td>"
                             + "<td class=\"d3\">￥" + parseFloat(item.FJJE).toFixed(2) + "</td>"
                             + "<td class=\"d4\"><input type='text' disabled value='" + item.SELSL + "'/></td>"
                             + "<td class=\"d5\">￥" + parseFloat(item.FJJE).toFixed(2) + "</td>"
                             + "<td class=\"d6\"><p id=\"delshop\"><a style=\"cursor:pointer\" onclick='DeleteGifts(" + item.ZPID + ")'>删除</a></p></td>"
                             + "</tr>";

                            if (item.CXFS == 2) {
                                if (parseFloat(item.FJJE) != 0) {
                                    giftTip += "&nbsp;&nbsp;加：" + parseFloat(item.FJJE).toFixed(2) + "分";
                                }
                            }
                            if (item.CXFS == 3) {
                                if (parseFloat(item.FJJE) != 0) {
                                    giftTip += " &nbsp;&nbsp;加：" + parseFloat(item.FJJE).toFixed(2) + "元";
                                    spTolJe = parseFloat(spTolJe) + parseFloat(item.FJJE);
                                }
                            }
                        }
                        else {
                            var selNumStr = BindSelectGiftNum(item.SELSL);
                            $("#zpTable").css("display", "block");
                            dataGiftsStr += "<tr><td width=\"135\" align=\"center\">" + item.TITLE + "</td>"
                             + "<td width=\"432\" class=\"d2\"><a><img title='" + item.NAME + "' src=\"" + item.IMGDIR + "\" width=\"52\" height=\"52\" /></a><p><font color=\"#5E5E5E\"><a>" + item.NAME + "</a></p></td>"
                             + "<td width=\"450\" class=\"d2\">" + item.CONT + "</td>"
                             + "<td width=\"137\" ><select id=\"select_" + item.ZPID + "_" + item.SELSL + "\">" + selNumStr + "</select></td>"
                             + "<td class=\"d6\"><p id=\"scshop\"><a style=\"cursor:pointer\" onclick=\"AddGiftsToShopCart(" + item.CXFAID + "," + item.CXDBH + "," + item.INX + "," + item.CXFS + ",'select_" + item.ZPID + "_" + item.SELSL + "')\">添加</a></p></td>"
                             + "</tr>";
                        }
                    }
                    else {
                        if (item.SELBJ == 1) {
                            if (item.CXFS == 4) {
                                if (parseFloat(item.CXJG) != 0) {
                                    giftTip += "&nbsp;&nbsp;赠：" + parseFloat(item.CXJG).toFixed(2) + "元券";
                                }
                            }
                            if (item.CXFS == 5) {
                                if (parseFloat(item.CXJG) != 0) {
                                    giftTip += "&nbsp;&nbsp;赠：" + parseFloat(item.CXJG).toFixed(2) + "分";
                                }
                            }
                            if (item.CXFS == 6 || item.CXFS == 14) {
                                if (parseFloat(item.CXJG) != 0) {
                                    giftTip += "&nbsp;&nbsp;满减：" + parseFloat(item.CXJG).toFixed(2) + "元";
                                    spTolJe = parseFloat(spTolJe) - parseFloat(item.CXJG);
                                }
                            }
                            if (item.CXFS == 7 || item.CXFS == 11) {
                                if (parseFloat(zkje) != 0) {
                                    giftTip += "&nbsp;&nbsp;折扣：" + parseFloat(zkje).toFixed(2) + "元";
                                    spTolJe = parseFloat(spTolJe) - parseFloat(zkje);
                                }
                            }
                            if (item.CXFS == 8) {
                                if (parseFloat(item.CXJG) != 0) {
                                    giftTip += "&nbsp;&nbsp;免：" + parseFloat(item.CXJG).toFixed(2) + "元运费";
                                    spTolJe = parseFloat(spTolJe) - parseFloat(item.CXJG);
                                }
                            }
                            if (item.CXFS == 9) {
                                if (parseFloat(item.CXJG) != 0) {
                                    giftTip += "&nbsp;&nbsp;赠：" + parseFloat(item.CXJG).toFixed(0) + "倍积分";
                                }
                            }
                            if (item.CXFS == 10) {
                                giftTip += "&nbsp;&nbsp;免运费";
                            }
                        }
                    }
                });

            }

            $("#id_cartsplist").html(s);
            $("#id_cartzplist").html("");
            $("#id_cartzplist").html(dataGiftsStr);
            $("#cxTipInfo").html("");
            $("#cxTipInfo").html(giftTip);
            $("#span_TolNum").html(spTolNum);
            $("#span_TolJe").html(parseFloat(spTolJe).toFixed(2));
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

function SameProductList() {
    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/SameProductList",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            data = jQuery.parseJSON(data.d);
            var strHtml = "";
            $.each(data, function (i, item) {
                strHtml += "<li>"
                            + "<div class=\"img\"><a href='products.aspx?spid=" + item.SPID + "' target=\"_blank\">"
                            + "<img height=\"135\" src=\"" + item.IMGDIR + "\" width=\"135\" /></a></div>"
                            + "<div class=\"txt\">" + item.NAME_QC + "</div>"
                            + "<div class=\"num\">￥" + parseFloat(item.XJ).toFixed(2) + "</div>"
                            + "<div class=\"bt\">"
                            + "<input name=\"\" onclick=\"AddToShopCart('" + item.SPID + "')\" type=\"button\" value=\"\" /></div>"
                            + "</li>";
            });
            if (strHtml != "") {
                $("#div_TL").css("display", "block");
            }
            $("#slide1 ul").html("");
            $("#slide1 ul").html(strHtml);
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

function AddToShopCart(productId) {
    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/AddToShopCart",
        data: "{'productId':'" + productId + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ShowCartshopInfo();
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

//全选
function SelAllProduct() { 
    var flag = "0";
    if($("#cb_All").prop("checked"))
    {
        flag = "1";
    }
    SelProduct(flag, "");
}

function SelProductCheck(flag, productId) {
    if (flag == "1") {
        flag = "0";
    }
    else {
        flag = "1";
    }
    SelProduct(flag, productId);
}

function BindSelectGiftNum(num) {
    var s = "";
    for (var i = 1; i <= num; i++) {
        s += "<option value='" + i + "'>" + i + "</option>";
    }
    return s;
}

//1选中
function SelProduct(flag, productId) {
    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/SelProduct",
        data: "{'flag':'" + flag + "','productId':'" + productId + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ShowCartshopInfo();
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

//加入收藏
function AddFavorite(productId) {
    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/AddFavorite",
        data: "{'productId':'" + productId + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (data) {
            data = jQuery.parseJSON(data);
            if (data.d == "nologon") {
                window.location.href = "LoginAndRegister.aspx";
            }
            else {
                alert(data.d);
            }
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

///删除购物车商品
function DeleteProduct(productId) {
    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/DelProduct",
        data: "{'productId':'" + productId + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ShowCartshopInfo();
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

///添加赠品
function AddGiftsToShopCart(cxfaid, cxdbh, inx, cxfs, selId) {
    var selsl = $('#' + selId).val();
    if (selsl == undefined || selsl <= 0 || selsl == null) {
        alert("可选数量错误");
        return;
    }

    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/AddGiftsToShopCart",
        data: "{'cxfaid':'" + cxfaid + "','cxdbh':'" + cxdbh + "','inx':'" + inx + "','cxfs':'" + cxfs + "','selsl':'" + selsl + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ShowCartshopInfo();
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

//删除购物车赠品
function DeleteGifts(productId) {
    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/DeleteGifts",
        data: "{'productId':'" + productId + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ShowCartshopInfo();
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

function openPage() {
    window.location.href = "index.aspx";
}

function JieSuan() {
    var obj_Js_Btn = $("#btn_JieSuan");
    var obj_Js_Tip = $("#span_skipTip");
    if (obj_Js_Btn != null && obj_Js_Tip != null) {
        obj_Js_Btn.css("display", "none");
        obj_Js_Tip.css("display", "block");
    }

    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/JieSuan",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (data) {
            data = jQuery.parseJSON(data);
            if (data.d == "") {
                window.location.href = "OrderSubmit.aspx";
            }
            else if (data.d == "nologon") {
                window.location.href = "LoginAndRegister.aspx?ReturnUrl=ShopCart.aspx";
            }
            else {
                obj_Js_Btn.css("display", "block");
                obj_Js_Tip.css("display", "none");
                alert(data.d);
            }
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

function NumAdd(id) {
    var val = $("#" + id).val();
    if (!parseInt(val)) {
        $("#" + id).val(1);
    }
    $("#" + id).val(parseInt(val) + 1);
    EditProductNum(id);
}

function NumMinus(id) {
    var val = $("#" + id).val();
    if (parseInt(val) <= 1) {
        $("#" + id).val(1);
        return;
    }
    if (!parseInt(val)) {
        $("#" + id).val(1);
        return;
    }
    $("#" + id).val(parseInt(val) - 1);
    EditProductNum(id);
}

function EditNum(id) {
    var val = $("#" + id).val();
    if (parseInt(val) <= 1) {
        $("#" + id).val(1);
        return;
    }
    if (!parseInt(val)) {
        $("#" + id).val(1);
        return;
    }
    EditProductNum(id);
}

function EditProductNum(id) {
    var val = $("#" + id).val();
    var productId = id.replace("sl_", "");

    $.ajax({
        type: "Post",
        url: "ShopCart.aspx/EditProductNum",
        data: "{'productId':'" + productId + "','num':'" + val + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            ShowCartshopInfo();
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}



