$("[type=text]").each(function(){
	$(this).find("ul").prepend('<li class="b"></li>').append('<li class="e"></li>');
})
