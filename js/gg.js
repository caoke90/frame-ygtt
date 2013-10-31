var bgimg=$(".top .gg");
if($(".top .gg img").length>0){
	var simg=$(".top .img");
	if($(".top .gg").css("display")=="none"){
		simg.show();
	}
	var int = setTimeout(
			   (function() {
				   bgimg.slideUp(2000);
				   simg.show();
			   }), 4000);
	simg.click(function() {
		bgimg.show();
		simg.hide();
	})
	$(".top .close").click(function() {
		clearTimeout(int);
		bgimg.hide();
		simg.show();
	})
}

