head.js(jspath+"Xslider.js",function(){
	$("div[jsui=vslide]").each(function(){
		$(this).Xslider({//.productshow��Ҫ�ƶ���������;
			unitdisplayed: 1, //���ӵĵ�λ����   ������;
			numtoMove: 1, //Ҫ�ƶ��ĵ�λ����    ������;
			loop: "cycle",
			dir: "V"//ˮƽ�ƶ����Ǵ�ֱ�ƶ���Ĭ��HΪˮƽ�ƶ�������V���ʾ��ֱ�ƶ�;
		});
	})
});