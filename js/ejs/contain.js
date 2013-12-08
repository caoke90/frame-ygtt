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
	module.exports=contain
})