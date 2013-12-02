define(function(require,exports,module){
	$("div[jsui=tght]").each(function(){
		var the=this;
		var arr=[],arrper=0;
		$("div",the).each(function(i){
			var num=parseInt($("span",this).eq(2).text())
			arr.push(num)
			arrper+=num
		})
		$("img",the).each(function(i){
			var w=parseInt(arr[i]/arrper*130)+1
			$(this).attr("width",w)
		})
	})
})