define(function(require,exports,module){
	$("div[jsui=tglidl]").each(function(){
		var the=this;
		$("li",the).each(function(i){
			$("span.an",this).click(function(){
				$("dl",the).removeClass("on");
				$("dl",the).eq(i).addClass("on");
				$("li",the).removeClass("on");
				$("li",the).eq(i).addClass("on");
			})
		})
		if($("li.on",the).length==0){
			$("li",the).eq(0).find("span.an").trigger("click");
		}else{
			$("li.on",the).trigger("click")
		}
		
	})
})