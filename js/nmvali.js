head.js(jspath+"validate/formValidator-4.1.0.js",jspath+"validate/formValidatorRegex.js",function(){
		//第一组校验组，默认组号为"1"
        $.formValidator.initConfig({formID:"form1",onError:function(){alert("校验没有通过，具体错误请看错误提示")}});
		
		$("#us").formValidator({onShow:"用户名为字母开头、数字、下划线组合",onFocus:"用户名为字母开头、数字、下划线组合",onCorrect:"输入格式正确",onEmpty:"用户名为字母开头、数字、下划线组合 "}).inputValidator({min:4,max:100,onError:"你输入的字符长度非法,请确认"}).regexValidator({regExp:"username",dataType:"enum",onError:"你输入的用户名非法,请确认"});
		$("#password1").formValidator({onShow:"请输入密码",onFocus:"至少4个长度",onCorrect:"密码合法"}).inputValidator({min:4,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码不能为空,请确认"});
		$("#password2").formValidator({onShow:"输再次输入密码",onFocus:"至少1个长度",onCorrect:"密码一致"}).inputValidator({min:4,empty:{leftEmpty:false,rightEmpty:false,emptyError:"重复密码两边不能有空符号"},onError:"重复密码不能为空,请确认"}).compareValidator({desID:"password1",operateor:"=",onError:"2次密码不一致,请确认"});
		$("#shouji").formValidator({empty:false,onShow:"请输入11位手机号码",onFocus:"请输入11位手机号码 ",onCorrect:"谢谢你的合作",onEmpty:"请输入11位手机号码 "}).regexValidator({regExp:["mobile"],dataType:"enum",onError:"你输入的手机不正确"});
		$("#email").formValidator({onShow:"请输入有效的E-mail ",onFocus:"请输入有效的E-mail ",onCorrect:"恭喜你,你输对了",defaultValue:""}).inputValidator({min:6,max:100,onError:"你输入的邮箱长度非法,请确认"}).regexValidator({regExp:"email",dataType:"enum",onError:"你输入的邮箱格式不正确"});
	
})