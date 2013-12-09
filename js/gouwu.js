
define(function(require,exports,module){
	//控制
	var contain=require("ejs/contain")

	//获取模板
	var tpl=require("ejs/contain.tpl")
	contain.setTpl(tpl)
	
	//获取数据
	$.get("js/ejs/contain1.data",function(data){
		contain.setContain1Data(eval(data))
	})
	

})

