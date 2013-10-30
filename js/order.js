//初始化订单页面
function call(url, param, fn) {
    jQuery.ajax({
        type:"POST",
        dataType:"json",
        url:url,
        data:param,
        success:function (data) {
            if (data != null) {
				PurchaseAppConfig.data=data;
                if (data.errorMessage != 'undefined' && data.errorMessage != null && data.errorMessage != '') {
                    alert(data.errorMessage);
                }
                /**
                 * login、cookie拦截器返回错误
                 */
                if (data.error != 'undefined' && data.error != null && data.error != "") {
                    if (data.error == "NoCart") {
                        goCart();//跳到购物车页面
                        return;
                    }
                    if (data.error == 'NotLogin') {
                       	goLogin();//跳到登陆页面
                        return;
                    }
                }

                if (data.error == 'undefined' || data.error == null || data.error == '') {
					fn(data)
                }
            }
        },
        complete:function (XMLHttpRequest, textStatus) {
            if (XMLHttpRequest.status == 400 ||
                XMLHttpRequest.status == 408 ||
                XMLHttpRequest.status == 500 ||
                XMLHttpRequest.status == 501 ||
                XMLHttpRequest.status == 502 ||
                XMLHttpRequest.status == 503 ||
                XMLHttpRequest.status == 504 ||
                XMLHttpRequest.status == 505 ||
                XMLHttpRequest.status == 506 ||
                XMLHttpRequest.status == 507 ||
                XMLHttpRequest.status == 508) {
                goError()
            }
        }
    });
}


call("iframe/getNewOrderInfo.html?rt=" + Math.random(),{},function(data){
	
	//渲染页面
	$("#show").html(TrimPath.processDOMTemplate("order_jst", data));
	//渲染购物车商品
	$("#part_cart").html(TrimPath.processDOMTemplate("skuList_jst", data));
	lipinkaInputEventInit();   //事件效果            
	isSupInStockFirstShip(data);//有货先发
	exceedCoupon(data);//超出优惠面额提示信息 
	showOrderRemark(data);//显示订单备注
	//是否余额开启了支付密码等.
	if (data.balance != 'undefined' && data.balance != null) {
		var balanceAmount = data.balance;
		isUserSafeVerifyOk(balanceAmount);
	}
	isNeedPaymentPassword(data);//是否存在支付密码
	if (data.areaName == "0") {
		Edit_Consignee();//如果不存在收货人信息 默认打开编辑功能
	}
	else if (data.shipIsIn == false) {
		Edit_PayType();		//如果不存在支付方式信息 默认打开编辑功能
	}
	
});