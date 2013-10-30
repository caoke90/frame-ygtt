$("div[jsui=timo5]").each(function(){
	var the=this;
	$(".title li",the).each(function(i){
		$(this).mouseover(function(){
			$(this).siblings("li").removeClass("on");
			$(this).addClass("on");
			$(".module li",the).hide();
			$(".module li",the).slice(5*i,5*(i+1)).show();
		})
	})
	$(".title li",the).eq(0).trigger("mouseover");
})