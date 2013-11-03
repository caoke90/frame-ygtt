//别名
seajs.config({
    alias: {
        "slidex": "slidex.js",
        "slidex3":"slidex.js",
	
        "slidef":"slidex.js"
    }
})
//加载jsui对应的js
seajs.use("com/jquery",function($){
    $(function(){
        $("[jsui]").each(function(){
            seajs.use($(this).attr("jsui"))
        })
    })
})