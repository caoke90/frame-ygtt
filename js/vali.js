head.js(jspath+"validate/formValidator-4.1.0.js",jspath+"validate/formValidatorRegex.js",function(){
		//第一组校验组，默认组号为"1"
        $.formValidator.initConfig({formID:"form1",debug:true,onSuccess:function(){alert("校验组1通过验证，不过我不给它提交");},onError:function(){alert("具体错误，请看网页上的提示")}});
		$("#us").formValidator({onShow:"请输入用户名",onFocus:"用户名至少5个字符,最多10个字符",onCorrect:"格式输入正确！"}).inputValidator({min:5,max:10,onError:"你输入的用户名非法,请确认"})
		$("#password1").formValidator({onShow:"请输入密码",onFocus:"至少1个长度",onCorrect:"密码合法"}).inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码不能为空,请确认"});
		$("#password2").formValidator({onShow:"输再次输入密码",onFocus:"至少1个长度",onCorrect:"密码一致"}).inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"重复密码两边不能有空符号"},onError:"重复密码不能为空,请确认"}).compareValidator({desID:"password1",operateor:"=",onError:"2次密码不一致,请确认"});
		$(":radio[name='xb_one']").formValidator({tipID:"sexTip",onShow:"请选择你的性别",onFocus:"没有第三种性别了，你选一个吧",onCorrect:"输入正确",defaultValue:["1"]}).inputValidator({min:1,max:1,onError:"性别忘记选了,请确认"});//.defaultPassed();
		$("#nl").formValidator({autoModify:true,onShow:"请输入的年龄（1-99岁之间）",onFocus:"只能输入1-99之间的数字哦",onCorrect:"恭喜你,你输对了"}).inputValidator({min:1,max:99,type:"value",onErrorMin:"你输入的值必须大于等于1",onError:"年龄必须在1-99之间，请确认"});
		$("#sjdh").formValidator({empty:true,onShow:"请输入你的手机或电话，可以为空哦",onFocus:"格式例如：0577-88888888或11位手机号码",onCorrect:"谢谢你的合作",onEmpty:"你真的不想留手机或电话了吗？"}).regexValidator({regExp:["tel","mobile"],dataType:"enum",onError:"你输入的手机或电话格式不正确"});
		
		$("#email").formValidator({validatorGroup:"2",onShow:"请输入邮箱",onFocus:"邮箱6-100个字符,输入正确了才能离开焦点",onCorrect:"恭喜你,你输对了",defaultValue:"@"}).inputValidator({min:6,max:100,onError:"你输入的邮箱长度非法,请确认"}).regexValidator({regExp:"^([\\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",onError:"你输入的邮箱格式不正确"});
		
		$("#xueli").formValidator({validatorGroup:"2",onShow:"请选择你的学历",onFocus:"学历必须选择",onCorrect:"谢谢你的配合",defaultValue:"a"}).inputValidator({min:1,onError: "你是不是忘记选择学历了!"});
	
})