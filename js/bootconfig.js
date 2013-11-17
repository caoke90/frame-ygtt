//别名
seajs.config({
    alias: {
        "slidex": "slidex.js",
        "slidex3":"slidex.js",
		"slidebig":"slidex.js",
        "slidef":"slidex.js",
		 "slidexn":"slidex.js",
		"slidexn3":"slidex.js"
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