define(function(require,exports,module){
    require("com/jq.Slide.js")
    $("div[jsui=slidey2]").each(function(){
        $(this).Slide({
            effect : "scroolY",
            speed : "normal",
            timer : 3000
        });
    });

})