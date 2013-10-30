define(function(require,exports,module){
    var $=require("com/jquery")
    require("com/jq.Slide.js")
    //slidex
    $("div[jsui=slidex]").each(function(){
        $(this).Slide({
            effect : "scroolX",
            speed : "normal",
            timer : 3000
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
	console.log(21)
})
