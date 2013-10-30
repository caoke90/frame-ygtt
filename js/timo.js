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
	$(".title li",the).eq(0).trigger("mouseover");
})