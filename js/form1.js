
//用来用户注册。匹配由字母、数字、下划线、@组成(4-20位)
$("#us").focus(function () {
    $("#usTip").removeClass("onCorrect onError").addClass("onFocus").html("用户名为字母开头、数字、下划线组合,至少4个字符");
}).blur(function () {
    if ($(this).val().match("^[A-Za-z0-9_@.]{4,100}$")) {
        $("#usTip").removeClass("onError").addClass("onCorrect").html("输入格式正确");
    } else {
        $("#usTip").removeClass("onCorrect").addClass("onError").html("你输入的字符格式错误,请确认");
    }
})
$("#usTip").addClass("onShow").html("请输入用户名");

//密码验证。由字母、数字组成(6-16位)
$("#password1").focus(function () {
    $("#password1Tip").removeClass("onCorrect onError").addClass("onFocus").html("至少6个长度");
}).blur(function () {
    if ($(this).val().match("^[A-Za-z0-9]{6,16}$")) {
        $("#password1Tip").removeClass("onError").addClass("onCorrect").html("输入格式正确");
    } else {
        $("#password1Tip").removeClass("onCorrect").addClass("onError").html("你输入的字符格式错误,请确认");
    }
})
$("#password1Tip").addClass("onShow").html("请输入密码");

//重复密码验证。由字母、数字组成(6-16位)
$("#password2").focus(function () {
    //$("#password2Tip").removeClass("onCorrect onError").addClass("onFocus").html("至少6个长度");
}).blur(function () {
    if ($(this).val() == "") { $("#password2Tip").removeClass("onCorrect").addClass("onError").html("密码不能为空"); return }
    if ($(this).val() == $("#password1").val()) {
        $("#password2Tip").removeClass("onError").addClass("onCorrect").html("输入格式正确");
    } else {
        $("#password2Tip").removeClass("onCorrect").addClass("onError").html("你输入的密码不一致,请确认");
    }
})
$("#password2Tip").addClass("onShow").html("请再次输入密码");

//用来手机号码验证。
$("#shouji").focus(function () {
    $("#shoujiTip").removeClass("onCorrect onError").addClass("onFocus").html("请输入11位手机号码");
}).blur(function () {
    if ($(this).val().match("^[0-9]{11}$")) {
        $("#shoujiTip").removeClass("onError").addClass("onCorrect").html("输入格式正确");
    } else {
        $("#shoujiTip").removeClass("onCorrect").addClass("onError").html("你输入的手机格式错误,请确认");
    }
})
$("#shoujiTip").addClass("onShow").html("请输入11位手机号码");

//用来邮箱验证。
$("#email").focus(function () {
    $("#emailTip").removeClass("onCorrect onError").addClass("onFocus").html("请输入有效的E-mail");
}).blur(function () {
    if ($(this).val().match("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")) {
        $("#emailTip").removeClass("onError").addClass("onCorrect").html("输入格式正确");
    } else {
        $("#emailTip").removeClass("onCorrect").addClass("onError").html("你输入的邮箱格式错误,请确认");
    }
})
$("#emailTip").addClass("onShow").html("请输入有效的E-mail");

//注册提交按钮
$("#ButtonNormal1").click(function () {
    if (!$("#us").val().match("^[A-Za-z0-9@_.]{4,100}$")) {
        $("#usTip").removeClass("onCorrect").addClass("onError").html("你输入的字符格式错误,请确认");
        return false;
    }
    if (!$("#password1").val().match("^[A-Za-z0-9]{6,16}$")) {
        $("#password1Tip").removeClass("onCorrect").addClass("onError").html("你输入的字符格式错误,请确认");
        return false;
    }
    if ($("#password2").val() !== $("#password1").val()) {
        $("#password2Tip").removeClass("onCorrect").addClass("onError").html("你输入的密码不一致,请确认");
        return false;
    }
    if (!$("#shouji").val().match("^[0-9]{11}$")) {
        $("#shoujiTip").removeClass("onCorrect").addClass("onError").html("你输入的手机格式错误,请确认");
        return false;
    }
    if (!$("#email").val().match("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")) {
        $("#emailTip").removeClass("onCorrect").addClass("onError").html("你输入的邮箱格式错误,请确认");
        return false;
    }
    if ($("#tb_yzm").val() == "") {
        alert("验证码不能为空")
        return false;
    }
    if (!$("#cb_aggreement").attr("checked")) {
        alert("你还没有阅读注册协议")
        return false;
    }
    return true;
})