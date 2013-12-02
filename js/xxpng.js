define(function(require,exports,module){
	$("img[jsui=xxpng]").each(function(){
		var num=parseFloat($(this).attr("data"))
		var w;
		if(num==parseInt(num)){
			w=num
		}else{
			w=parseInt(num)+0.5
		}
		var src=$(this).attr("src").replace(/\d+/,w)
		$(this).attr("src",src)
		
	})
})