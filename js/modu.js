define(function(require,exports,module){
	$("div[jsui=modu]").each(function(){
		var the=this;
		$(".title",the).each(function(i){
			$(this).mouseover(function(){
				$(".module",the).removeClass("on");
				$(".module",the).eq(i).addClass("on");
			})
		})
		if($(".module.on",the).length==0){
			$(".title",the).eq(0).trigger("mouseover");
		}else{
			$(".module.on",the).trigger("mouseover")
		}
		
	})
})