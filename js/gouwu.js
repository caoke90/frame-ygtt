
define(function(require,exports,module){
	//控制
	contain1=require("ejs/contain1")

	//获取模板
	var tpl=require("ejs/contain1.tpl")
	contain1.setTpl(tpl)
	
	//获取数据
	$.get("js/ejs/contain1.data",function(data){
		contain1.setContain1Data(eval(data))
		//contain1.render()
	})
	

})

