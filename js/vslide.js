head.js(jspath+"Xslider.js",function(){
	$("div[jsui=vslide]").each(function(){
		$(this).Xslider({//.productshow是要移动对象的外框;
			unitdisplayed: 1, //可视的单位个数   必需项;
			numtoMove: 1, //要移动的单位个数    必需项;
			loop: "cycle",
			dir: "V"//水平移动还是垂直移动，默认H为水平移动，传入V则表示垂直移动;
		});
	})
});