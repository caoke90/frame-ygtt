define(function(require,exports,module){
	
	var contain={
		html:"",
		//模板
		tpl:null,
		setTpl:function(tpl){
			this.tpl=tpl
		},
		//数据
		data:{
			state:"编辑",
			//选择编辑
			select:0
		},
		setContain1Data:function(data){
			this.data["contain1"]=data
			this.render()
		},
	
		setSelect:function(id){
			this.data.select=id
			this.render()
		},
		//渲染
		render:function(){
			this.html = ejs.render(this.tpl,this.data);
			$(".contain").html(this.html);
		}
	}
	//获取模板
	var tpl=require("./contain.tpl")
	contain.setTpl(tpl)
	
	//获取数据
	$.get("js/ejs/contain1.data",function(data){
		contain.setContain1Data(eval(data))
	})
	module.exports=contain
})