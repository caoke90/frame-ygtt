
define(function(require,exports,module){	
	$("a[jsui=maphref]").each(function(i){
		var txt=$(this).attr("href")
		var url="http://map.baidu.com/?newmap=1&s=con"+encodeURIComponent("&wd="+mconfig.center+txt+"&c=53")+"&fr=alam0&ext=1&from=alamap"
		$(".mod h2,.mod h3").eq(i).find("a").attr("href",url)
	})
	
})

