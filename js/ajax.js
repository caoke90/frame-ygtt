define(function(require,exports,module){
$("div[jsui=ajax]").each(function(){
	var the=this;
	$(".title li",the).each(function(i){
		$(this).mouseover(function(){
			$(this).siblings("li").removeClass("on");
			$(this).addClass("on");
			$(".module .ajax",the).hide();
			$(".module .ajax",the).eq(i).show()
			var url=$("a",this).attr("href")
			$.get(url,function(){
				if(url){
					$(".module .ajax",the).eq(i).html(url);
				}
			})
		})
	})
	if($(".title li.on",the).length==0){
			$(".title li",the).eq(0).trigger("mouseover");
		}else{
			$(".title li.on",the).trigger("mouseover")
			}
})
})