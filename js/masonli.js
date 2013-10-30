head.js(jspath+"jquery.masonry.min.js",function(){
	$("[jsui=masonli]").each(function(){
		$(this).masonry({
		  itemSelector: 'li'
		});
	})
})