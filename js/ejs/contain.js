define(function(require,exports,module){
	
	contain={
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
	//获取模板
	var i=0
	i++
	$.get("js/ejs/contain.html",function(tpl){
		contain.setTpl(tpl)
		i--
		if(i==0){
			contain.render()
		}
	})
	
	//获取数据
	i++
	$.get("js/ejs/contain1.txt",function(data){
		contain.setContain1Data(eval(data))
		i--
		if(i==0){
			contain.render()
		}
	})
	module.exports=contain
})