$("div[jsui=navbg]").each(function(){
	var the=this;
	$("li",the).each(function(i){
		$(this).addClass("li"+i).append("<q></q>").prepend("<i>></i>")
	})
})