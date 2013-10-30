$("div[jsui=timotex]").each(function(){
	var the=this;
	$(".title li",the).each(function(i){
		$(this).mouseover(function(){
			$(this).siblings("li").removeClass("on");
			$(this).addClass("on");
			$(".module ul",the).hide();
			$(".module ul",the).eq(i).show();
			$(".tex",the).hide();
			$(".tex",the).eq(i).show();
		})
	})
	$(".module ul",the).eq(0).find("li").eq(1).after("<li style='width:327px;'></li>")
	$(".title li",the).eq(0).trigger("mouseover");
})