define(function(require,exports,module){
$("div[jsui=dtdd]").each(function(){
	var the=this;
	$("dl dt",the).each(function(i){
		var n=i+1;
		$(this).prepend('<q class="q'+n+'">'+n+'</q>');
		$("dl dd",the).eq(i).prepend('<q class="q'+n+'">'+n+'</q>');
		$(this).mouseover(function(){
			$(this).siblings("dt").removeClass("dn");
			$(this).addClass("dn");
			$("dl dd",the).hide();
			$("dl dd",the).eq(i).show();
		})
	})
	$("dl dt",the).eq(0).trigger("mouseover");
})
})