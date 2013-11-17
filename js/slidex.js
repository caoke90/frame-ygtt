define(function(require,exports,module){
    var $=require("com/jquery")
    require("com/jq.Slide.js")
	 //slidebig
    $("div[jsui=slidebig]").each(function(){
		var left=$(".JQ-slide-content li",this).offset().left
		$(".JQ-slide-content",this).css({"left":-left})
		$(".JQ-slide-content li",this).width($("body").width())
        $(this).Slide({
            effect : "fade",
            speed : "normal",
            timer : 3000
        });
    });
    //slidex
    $("div[jsui=slidex]").each(function(){
        $(this).Slide({
            effect : "scroolX",
            speed : "normal",
            timer : 3000
        });
    });
	//slidexn
    $("div[jsui=slidexn]").each(function(){
        $(this).Slide({
            effect : "scroolX",
            speed : "normal",
			autoPlay:false,
            timer : 3000
        });
    });
	//slidex
    $("div[jsui=slidexn3]").each(function(){
        $(this).Slide({
            effect : "scroolX",
            speed : "normal",
            timer : 3000,
			autoPlay:false,
			steps:3
        });
    });
    //slidex3
    $("div[jsui=slidex3]").each(function () {
        $(this).Slide({
            effect: "scroolLoop",
            speed: "normal",
            timer: 3000,
            autoPlay: false,
            steps: 3
        });
    });
    //slidef
    $("div[jsui=slidef]").each(function(){
        $(this).Slide({
            effect : "fade",
            speed : "normal",
            timer : 3000
        });
    });
	
})
