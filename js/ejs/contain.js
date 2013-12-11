define(function(require,exports,module){

	contain={
		html:"",
        //获取模板
        tpl:null,
        init:function(){
            this.getTpl()
            this.getData()
        },
        getTpl:function(){
            var _this=this;
            $.get("js/ejs/contain.html",function(tpl){
                _this.tpl=tpl
                _this.render()
            })
        },
        //获取数据
        data:null,
        getData:function(){
            if(this.data){
                return this.data
            }
            var _this=this;
            $.get("js/ejs/contain.data",function(data){
                _this.data=JSON.parse(data)
                _this.render()
            })
        },
		//渲染
		render:function(){
            if(this.tpl&&this.data){
                $("#contain").html(ejs.render(this.tpl,this.data));
            }
		},
        //页面接口函数
        setData:function(name,value){

            var arr=name.split(",")
            console.log(this.data)
            if(arr.length==1){
                this.data[arr[0]]=value
            }
            if(arr.length==2){
                this.data[arr[0]][arr[1]]=value
            }
            if(arr.length==3){
                this.data[arr[0]][arr[1]][arr[2]]=value
            }
            this.render()
        },
        //提交
        commit:function(){
            $.post("post.php",this.data)
        }
	}
    contain.init()
    setData=function(name,value){
        contain.setData(name,value)
    }
	module.exports=contain
})