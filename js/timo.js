define(function(require,exports,module){
$("div[jsui=timo]").each(function(){
	var the=this;
	$(".title li",the).each(function(i){
		$(this).mouseover(function(){
			$(this).siblings("li").removeClass("on");
			$(this).addClass("on");
			$(".module ul",the).hide();
			$(".module ul",the).eq(i).show();
		})
	})
	if($(".title li.on",the).length==0){
			$(".title li",the).eq(0).trigger("mouseover");
		}else{
			$(".title li.on",the).trigger("mouseover")
			}
})
})