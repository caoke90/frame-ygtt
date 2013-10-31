$("div[jsui=json]").each(function(){
	$(this).html($(this).html().replace(/\$\{([\w.]*)\}/g,function(w){
		w=w.substring(2, w.length-1);
		return eval(w);
	}))
	
})