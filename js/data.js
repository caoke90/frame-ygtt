var giftTip = "";

function ShowCartshopInfo() {
    ShowShopCartProductList();
}

function InitUserInfo() {
    Consignee();
    SaveConsignInfo(0);
    SavePaytypeInfo();
}
//常用地址
function Consignee() { 
    $("#ul_consignee").html("数据加载中...");
    var obj = new Object();
    obj["opType"] = "loadConsignee";
    $.ajax({
        type: "Post",
        url: "../AjaxPage/WebPage/OrderSubmit.ashx",
        data: obj,
        async: false,
        dataType: "json",
        success: function (data) {
            $("#ul_consignee").html("");
            var strHtml = "";
            if (data == "nologon") {
                window.location.href = "LoginAndRegister.aspx?ReturnUrl=ShopCart.aspx";
            }
            var mobj = "checked=false";
            $(data).each(function () {
                mobj = "checked=false";
                if (this.MRSHRBJ == "1") {
                    mobj = "checked=true";
                    ChangeConsignee(this.ID, this.INX);
                }
                strHtml += "<li>";
                strHtml += "<input id=\"addrii" + this.ID + "\" " + mobj + " onclick=\"ChangeConsignee(" + this.ID + "," + this.INX + ");\" type=\"radio\" name=\"radioaddressname\"/>";
                strHtml += "<label for=\"addrii" + this.ID + "\"><strong>" + this.SHRMC + "</strong>";
                strHtml += "&nbsp;" + this.SHRADDRESS + "&nbsp;" + this.SHRMPHONE + "&nbsp;" + this.SHRPOST + "</label><span onclick=\"DeleteConsignee(" + this.ID + "," + this.INX + ")\">删除</span>";
                strHtml += "</li>";
            });
            if (strHtml == "") {
                InitDisData($("#hd_district").val()); 
            }
            $("#ul_consignee").html(strHtml);
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}


function ChangeConsignee(id, inx) {
    var obj = new Object();
    obj["opType"] = "ChangeConsignee";
    obj["userId"] = id;
    obj["inx"] = inx;
    $.ajax({
        type: "Post",
        url: "../AjaxPage/WebPage/OrderSubmit.ashx",
        data: obj,
        async: false,
        dataType: "json",
        success: function (data) {
            if (data != null) {
                $("#consignee_addressname").val(data.SHRMC);
                $("#hd_district").val(data.SHRSF);
                $("#consignee_address").val(data.SHRADDRESS);
                $("#consignee_message").val(data.SHRMPHONE);
                $("#consignee_phone").val(data.SHRPHONE);
                // $("#consignee_email").val(data.SHR);
                $("#consignee_postcode").val(data.SHRPOST);
                InitDisData($("#hd_district").val());
            }
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}

function DeleteConsignee(id,inx)
{
    var obj = new Object();
    obj["opType"] = "DeleteConsignee";
    obj["userId"] = id;
    obj["inx"] = inx;
    $.ajax({
        type: "Post",
        url: "../AjaxPage/WebPage/OrderSubmit.ashx",
        data: obj,
        dataType: "json",
        success: function (data) {
            if (data == "") {
                Consignee();
            }
            else {
                alert(data);
            }
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}
function AddConsignee()
{
    $("#ul_consignee").html("数据加载中...");
    var obj = new Object();
    obj["opType"] = "AddConsignee";
    obj["consignee_addressname"] = $("#consignee_addressname").val();
    obj["hd_district"] = $("#hd_district").val();
    obj["consignee_address"] = $("#consignee_address").val();
    obj["consignee_message"] = $("#consignee_message").val();
    obj["consignee_phone"] = $("#consignee_phone").val();
    obj["consignee_email"] = $("#consignee_email").val();
    obj["consignee_postcode"] = $("#consignee_postcode").val();
    $.ajax({
        type: "Post",
        url: "../AjaxPage/WebPage/OrderSubmit.ashx",
        data: obj,
        dataType: "json",
        success: function (data) {
            if (data == "") {
                Consignee();
            }
            else {
                alert(data);
            }
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}
function InitDisData(id) {
    var selId = "";
    if (id.length >= 2) {
        selId = id.substr(0, 2);
    }
    InitDistrict("",selId, "consignee_province");
    if (id.length >= 4) {
        InitDistrict(id.substr(0, 2),id.substr(0, 4), "consignee_city");
    }
    if (id.length >= 6) {
        InitDistrict(id.substr(0, 4), id.substr(0, 6), "consignee_county");
    }
}

function changeprovince() {
    var objStr = $("#consignee_province").val();
    if (objStr != "") {
        InitDistrict(objStr,"", "consignee_city");
    }
    else {
        $("#consignee_city").html('<option value="">--请选择--</option>');
    }
    $("#consignee_county").html('<option value="">--请选择--</option>');
}

function changecity() {
    var objStr = $("#consignee_city").val();
    if (objStr != "") {
        InitDistrict(objStr,"", "consignee_county");
    }
    else {
        $("#consignee_county").html('<option value="">--请选择--</option>');
    }
}

function changecounty() {
    $("#hd_district").val($("#consignee_county").val());
}

function InitDistrict(pid,selid,dllId) {
    $("#" + dllId).prop("disabled", true);
    $("#" + dllId).html("加载中...");
    var obj = new Object();
    obj["opType"] = "loadDistrict";
    obj["pid"] = pid;
    $.ajax({
        type: "Post",
        async: false,
        url: "../AjaxPage/WebPage/OrderSubmit.ashx",
        data: obj,
        dataType: "json",
        success: function (data) {
            $("#" + dllId).prop("disabled", false);
            $("#" + dllId).html('<option value="">--请选择--</option>');
            $(data).each(function () {
                if(this.CODE == selid)
                {
                    $("#" + dllId).append('<option selected value="' + this.CODE + '">' + this.MC2 + '</option>');
                }
                else
                {
                    $("#" + dllId).append('<option value="' + this.CODE + '">' + this.MC2 + '</option>');
                }
            });

        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}
//初始化商品
function ShowShopCartProductList() {
    $("#shoplist .blo2 .module table tbody").html("加载中...");
    var spTolJe = 0;
    $.ajax({
        type: "Post",
        url: "OrderSubmit.aspx/ShowShopCartSpList",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var productGiftsArr = data.d.split('[#]');
            data = jQuery.parseJSON(productGiftsArr[0]);
            var spTolNum = 0;
            var s = "";
            var zkje = 0;
            $.each(data, function (i, item) {
                $("#shoplist .blo2 .module table tbody").html("");
                var spsl = parseFloat(item.XSSL);
                var lsdj = parseFloat(item.LSDJ);
                var spZje = parseFloat(spsl * lsdj);
                var spnameinfo = item.SPSX.replace("无属性", "");

                if (item.SELBJ == 1) {
                    spTolNum = parseFloat(spTolNum) + parseFloat(spsl);
                    spTolJe = parseFloat(spTolJe) + parseFloat(spZje);
                    zkje = parseFloat(zkje) + parseFloat(item.YXZKJE);


                    s += "<tr>"
                         + "<td class=\"d2\"><a href='products.aspx?spid=" + item.SPID + "' target='_blank'><img title='" + spnameinfo + "' src=\"" + item.IMGDIR + "\" width=\"52\" height=\"52\" /></a><p><a href='products.aspx?spid=" + item.SPID + "' target='_blank'>" + spnameinfo + "</a></p></td>"
                         + "<td class=\"d3\">￥" + parseFloat(item.LSDJ).toFixed(2) + "</td>"
                         + "<td class=\"d4\"><input id='sl_" + item.SPID + "' disabled  type='text' value='" + spsl + "'/></td>"
                         + "<td class=\"d5\">￥" + parseFloat(spZje).toFixed(2) + "</td>"
                         + "</tr>";
                }
            });


            giftTip = "商品金额：" + spTolJe + "元";

            if (productGiftsArr[1] != "Empty") {
                var dataGifts = jQuery.parseJSON(productGiftsArr[1]);
                $.each(dataGifts, function (i, item) {
                    if (item.CXFS == 1 || item.CXFS == 2 || item.CXFS == 3) {
                        if (item.SELBJ == 1) {
                            s += "<tr>"
                             + "<td class=\"d2\"><a><img title='" + item.NAME + "' src=\"" + item.IMGDIR + "\" width=\"52\" height=\"52\" /></a><p><font color=\"red\">[赠品]</font><font color=\"#5E5E5E\"><a>" + item.NAME + "</a></p></td>"
                             + "<td class=\"d3\">￥" + parseFloat(item.FJJE).toFixed(2) + "</td>"
                             + "<td class=\"d4\"><input type='text' disabled value='" + item.SELSL + "'/></td>"
                             + "<td class=\"d5\">￥" + parseFloat(item.FJJE).toFixed(2) + "</td>"
                             + "</tr>";

                            if (item.CXFS == 2) {
                                if (parseFloat(item.FJJE) != 0) {
                                    giftTip += "&nbsp;&nbsp;加：" + parseFloat(item.FJJE).toFixed(2) + "分";
                                }
                            }
                            if (item.CXFS == 3) {
                                if (parseFloat(item.FJJE) != 0) {
                                    giftTip += " &nbsp;&nbsp;加：+" + parseFloat(item.FJJE).toFixed(2) + "元";
                                    spTolJe = parseFloat(spTolJe) + parseFloat(item.FJJE);
                                }
                            }
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
                                    giftTip += "&nbsp;&nbsp;满减：-" + parseFloat(item.CXJG).toFixed(2) + "元";
                                    spTolJe = parseFloat(spTolJe) - parseFloat(item.CXJG);
                                }
                            }
                            if (item.CXFS == 7 || item.CXFS == 11) {
                                if (parseFloat(zkje) != 0) {
                                    giftTip += "&nbsp;&nbsp;折扣：-" + parseFloat(zkje).toFixed(2) + "元";
                                    spTolJe = parseFloat(spTolJe) - parseFloat(zkje);
                                }
                            }
                            if (item.CXFS == 9) {
                                if (parseFloat(item.CXJG) != 0) {
                                    giftTip += "&nbsp;&nbsp;赠：" + parseFloat(item.CXJG).toFixed(0) + "倍积分";
                                }
                            }
                            if (item.CXFS == 8) {
                                if (parseFloat(item.CXJG) != 0) {
                                    giftTip += "&nbsp;&nbsp;免：-" + parseFloat(item.CXJG).toFixed(2) + "元运费";
                                    spTolJe = parseFloat(spTolJe) - parseFloat(item.CXJG);
                                }
                            }
                            if (item.CXFS == 10) {
                                giftTip += "&nbsp;&nbsp;免运费";
                            }
                        }
                    }
                });

            }

            $("#shoplist .blo2 .module table tbody").html(s);
            $("#js_info").html("");
            $("#js_info").html(giftTip);
            $("#span_zje").html("￥" + parseFloat(spTolJe).toFixed(2));
            CalcYf(); //计算运费
        },
        error: function (e) {
            alert("err:" + e);
        }
    });
    return false;
}


//显示隐藏收货人信息
function ShowOrHiddenConsign(flag) {
    if (flag == 0) {
        $("#consign .write").hide();
        $("#consign .show").show();
    }
    else {
        $("#consign .write").show();
        $("#consign .show").hide();
    }
}
//显示隐藏支付配送信息
function ShowOrHiddenPaytype(flag) {
    if (flag == 0) {
        $("#paytype .write").hide();
        $("#paytype .show").show();
    }
    else {
        $("#paytype .write").show();
        $("#paytype .show").hide();
    }
}
//显示隐藏发票信息
function ShowOrHiddenInvoice(flag) {
    if (flag == 0) {
        $("#invoice .write").hide();
        $("#invoice .show").show();
    }
    else {
        $("#invoice .write").show();
        $("#invoice .show").hide();
    }
}

//显示隐藏自提门店
function ShowZtMdList(flag) {
    if (flag == 0) {
        $("#div_ztmd").show();
    }
    else {
        $("#div_ztmd").hide();
    }
}

function ShowDw(flag) {
    if (flag == 0) {
        $("#li_dw").hide();
    }
    else {
        $("#li_dw").show();
    }
}

function checkconsignee_addressname() {
    if ($("#consignee_addressname").val() == "") {
        $("#name_tip").html("<font color='red'收货人不能为空！</font>");
        //$("#consignee_addressname").focus();
        return false;
    }
    $("#name_tip").html("");
    return true;
}

function checkconsignee_address() {
    if ($("#consignee_address").val() == "") {
        $("#address_tip").html("<font color='red'>地址地址不能为空！</font>");
        //$("#consignee_address").focus();
        return false;
    }
    $("#address_tip").html("");
    return true;
}

//jquery验证email
function checkSubmitEmail() {
    if ($("#consignee_email").val() == "") {
        $("#email_tip").html("<font color='red'>邮箱地址不能为空！</font>");
        //$("#consignee_email").focus();
        return false;
    }

    if (!IsEmail($("#consignee_email").val())) {
        $("#email_tip").html("<font color='red'>邮箱格式不正确！请重新输入！</font>");
        //$("#consignee_email").focus();
        return false;
    }
    $("#email_tip").html("");
    return true;
}

//jquery验证手机号码
function checkSubmitMobil() {
    if ($("#consignee_message").val() != "" && !IsMphone($("#consignee_message").val())) {
        $("#phone_tip").html("<font color='red'>手机号码格式不正确！请重新输入！</font>");
        //$("#consignee_message").focus();
        return false;
    }

    if ($("#consignee_message").val() == "" && $("#consignee_phone").val() == "") {
        $("#phone_tip").html("<font color='red'>手机号码和固定电话不能同时为空！</font>");
        //$("#consignee_message").focus();
        return false;
    }
    $("#email_tip").html("");
    return true;
}
//jquery验证固定电话
function check_phone() {
    var isPhone = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
    if ($("#consignee_phone").val() != "" && !IsPhone($("#consignee_phone").val())) {
        $("#phone_tip").html("<font color='red'>请输入正确电话号码！</font>");
        //$("#consignee_phone").focus();
        return false;
    }

    if ($("#consignee_message").val() == "" && $("#consignee_phone").val() == "") {
        $("#phone_tip").html("<font color='red'>手机号码和固定电话不能同时为空！</font>");
        //$("#consignee_phone").focus();
        return false;
    }
    $("#phone_tip").html("");
    return true;
}
//jquery验证邮编
function check_postcode() {
    if (!IsPost(Trim($("#consignee_postcode").val()))) {
        $("#post_tip").html("<font color='red'>邮编为空！</font>");
        //$("#consignee_postcode").focus();
        return false;
    }
    $("#post_tip").html("");
    return true;
}

function SaveConsignInfo(flag) {
    if (flag == 1) {
        var districtStr = "";
        if (!checkconsignee_addressname())
            return;
        if (!checkconsignee_address())
            return;
        if (!checkSubmitMobil())
            return;
        if (!check_phone())
            return;
        if (!checkSubmitEmail())
            return;
        if (!check_postcode())
            return;
        if ($("#hd_district").val() == "") {
            $("#dis_tip").html("<font color='red'>请选择配送区域！</font>");
            return false;
        }
    }
    if ($("#hd_district").val() != "") {
        districtStr = $("#consignee_province").find("option:selected").text() + "-" + $("#consignee_city").find("option:selected").text() + "-" + $("#consignee_county").find("option:selected").text();
    }
    $("#consign .show .module li").eq(0).find("span").html($("#consignee_addressname").val());
    $("#hid_consignee_addressname").val($("#consignee_addressname").val());
    $("#consign .show .module li").eq(1).find("span").html(districtStr);
    $("#hd_consigneedistrict").val($("#hd_district").val());
    $("#consign .show .module li").eq(2).find("span").html($("#consignee_address").val());
    $("#hid_consignee_address").val($("#consignee_address").val());
    $("#consign .show .module li").eq(3).find("span").html($("#consignee_message").val());
    $("#hid_consignee_message").val($("#consignee_message").val());
    $("#consign .show .module li").eq(4).find("span").html($("#consignee_phone").val());
    $("#hid_consignee_phone").val($("#consignee_phone").val());
    $("#consign .show .module li").eq(5).find("span").html($("#consignee_email").val());
    $("#hid_consignee_email").val($("#consignee_email").val());
    $("#consign .show .module li").eq(6).find("span").html($("#consignee_postcode").val());
    $("#hid_consignee_postcode").val($("#consignee_postcode").val());
    CalcYf();
    AddConsignee();
    ShowOrHiddenConsign(0);
}

function SavePaytypeInfo() {
    if ($("#rao_zxzf").prop("checked")) {
        $("#paytype .show .module li").eq(0).find("span").html("在线支付");
        $("#hid_zffs").val("1");
    }
    else {
        $("#paytype .show .module li").eq(0).find("span").html("货到付款");
        $("#hid_zffs").val("0");
    }
    if ($("#radioPSFS_SHSM").prop("checked")) {
        $("#paytype .show .module li").eq(1).find("span").html("自提(" +$("input[name='rb_MdList']:checked+label").text() + ")");
        $("#zt_md").val($("#rb_MdList selected:true").val());
        $("#hd_psfs").val("1");
    }
    else {
        $("#paytype .show .module li").eq(1).find("span").html("快递");
        $("#hd_psfs").val("0");
    }

    //
    CalcYf();

    if ($("#radioTQSJ_1").prop("checked")) {
        $("#paytype .show .module li").eq(3).find("span").html("<q>只工作日送货(双休日、假日不用送)</q>");
        $("#hd_shsj").val("1");
    }
    if ($("#radioTQSJ_0").prop("checked")) {
        $("#paytype .show .module li").eq(3).find("span").html("<q>工作日、双休日与假日均可送货</q>");
        $("#hd_shsj").val("0");
    }
    if ($("#radioTQSJ_2").prop("checked")) {
        $("#paytype .show .module li").eq(3).find("span").html("<q>只双休日、假日送货(工作日不用送)</q>");
        $("#hd_shsj").val("2");
    }
    ShowOrHiddenPaytype(0);
}

function SaveInvoiceInfo() {
    if ($("#fplx_pt").prop("checked")) {
        $("#invoice .show .module li").eq(0).find("span").html("普通发票");
        if ($("#fp_tt_gr").prop("checked")) {
            $("#invoice .show .module li").eq(1).find("span").html("个人");
        }
        else {
            $("#invoice .show .module li").eq(1).find("span").html("单位(" + $("#tb_dwmc").val() + ")");
        }
        $("#invoice .show .module li").eq(2).find("span").html($("input[name='rbListFp']:checked+label").text());
      
    }
    ShowOrHiddenInvoice(0);
}

function LoadVoucherList() {
    $("#ul_VoucherList").html("数据加载中...");
    $.ajax({
        type: "Post",
        url: "OrderSubmit.aspx/GetAllVoucherList",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (data) {

            if (data.d == "") {
                $("#ul_VoucherList").html("没有可用优惠券");
                return;
            }
            data = jQuery.parseJSON(data.d);
            var strHtml = "";
            $(data).each(function () {
                if (parseFloat(this.payable) != 0) {
                    strHtml += '<li><input id="dzq_name_' + this.id + '" onclick="ShiYongDzq(\'' + this.id + '\',' + this.payable + ')" name="voucherCheckBox" value="6735-7330-D7C3-4130" type="checkbox" />';
                    strHtml += '<label>' + this.name + '&nbsp;&nbsp;余额￥' + parseFloat(this.balance).toFixed(2) + '&nbsp;&nbsp;可用金额￥' + parseFloat(this.payable).toFixed(2) + '</label>';
                    strHtml += '</li>';
                }
            });
            $("#ul_VoucherList").html(strHtml);
        },
        error: function (err) {
            alert(err + "err");
        }
    });
    return false;
}

//电子券使用
function ShiYongDzq(id, je) {
    var selBj = "0";
    if ($("#dzq_name_" + id).prop("checked")) {
        selBj = "1";
    }
    $.ajax({
        type: "Post",
        url: "OrderSubmit.aspx/ShiYongDzq",
        data: "{'id':'" + id + "','je':'" + je + "','selBj':'" + selBj + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var msg = data.d["error"];
            if (msg != "") {
                alert(msg);
                return false;
            }
            var giftTipTemp = giftTip;
            var spTolJe = 0;
            giftTipTemp += "&nbsp;&nbsp;优惠券：-" + parseFloat(data.d["dzqzfje"]).toFixed(2) + "元";
            $("#js_info").html(giftTipTemp);
            $("#span_zje").html("￥" + parseFloat(data.d["totalJe"]).toFixed(2));
        },
        error: function (err) {
            alert(err + "err");
        }
    });
    return false;
}

function VoucherPanClose()
{
    if ($("#div_voucher_title span").html() == "(+)") {
        $("#div_voucher_title").unbind("click"); 
        $("#div_voucher_title span").text("(-)");
        $("#div_voucher_body").show();
        LoadVoucherList();
    }
    else {
        $("#div_voucher_title span").prop("disabled", false);
        $("#div_voucher_body").hide();
        $("#div_voucher_title span").text("(+)");
        $("#div_voucher_title").click(function () { VoucherPanClose() });
    }
}

function CalcYf() {
    var msg;
    var sPsfs;
    sPsfs = $("#hd_psfs").val();
    $.ajax({
        type: "Post",
        url: "OrderSubmit.aspx/GetYf",
        data: "{'district':'" + $("#hd_consigneedistrict").val() + "','psfs':'" + sPsfs + "','psgs':'1'}",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        async: false,
        success: function (data) {
            data = jQuery.parseJSON(data);
            if (data.d == "")
                return;
            var strArr_Temp = data.d.split('[$]');
            var strArr = strArr_Temp[0].split('[#]');
            var spJe = strArr_Temp[1];
            if (strArr[0] == "0") {
                $("#rao_hdfk").prop("disabled", true);
                $("#rao_zxzf").prop("checked", true);
            }
            else {
               // $("#rao_hdfk").prop("disabled", false); 货到付款不可用
            }

            var h = "";
            if (!strArr[1]) {
                strArr[1] = "0";
            }
            if (parseFloat(strArr[1]) == 0) { h = " <q>(免运费)</q>" }
            $("#paytype .show .module li").eq(2).find("span").html(parseFloat(strArr[1]).toFixed(2) + "元" + h);
            $("#span_write_yf").html(parseFloat(strArr[1]).toFixed(2) + "元");

            var temp = $("#js_info").text();
            var arrStr = temp.replace("免运费", "").replace(/运费.*元/g, "");
            arrStr = $.trim(arrStr);
            giftTip = arrStr + "&nbsp;&nbsp;&nbsp;运费 +" + parseFloat(strArr[1]).toFixed(2) + "元";
            $("#js_info").html(giftTip);
            $("#span_zje").html("￥" + (parseFloat(spJe) + parseFloat(strArr[1])).toFixed(2));
        },
        error: function (err) {
            alert(err + "err");
        }
    });
    return false;
}

function SummitOrderTip() {
    $("#btn_Submit").hide();
    $("#span_skipTip").show();
}

$(function () {
   // if ($("#hd_SummitBj").val() == "") {
        InitUserInfo();  //初始化信息
  //  }
    ShowCartshopInfo();
    //绑定显示隐藏收货人信息 事件
    $("#consign .show .title  span").click(function () { ShowOrHiddenConsign(1); });
    $("#consign .write .title  span").click(function () { ShowOrHiddenConsign(0); });
    //绑定显示隐藏支付配送信息 事件
    $("#paytype .show .title  span").click(function () { ShowOrHiddenPaytype(1); });
    $("#paytype .write .title  span").click(function () { ShowOrHiddenPaytype(0); });
    //绑定显示隐藏发票信息信息 事件
    $("#invoice .show .title  span").click(function () { ShowOrHiddenInvoice(1); });
    $("#invoice .write .title  span").click(function () { ShowOrHiddenInvoice(0); });
    //收货人保存事件
    $("#consign .write .module .bcshr input").click(function () { SaveConsignInfo(1); });
    //支付配送保存
    $("#paytype .write .module .bcshr input").click(function () { SavePaytypeInfo(); });
    //发票保存
    $("#invoice .write .module .bcshr input").click(function () { SaveInvoiceInfo(); });
});
