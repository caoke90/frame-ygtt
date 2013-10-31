define(function(require,exports,module){
    require("com/jq.Slide.js")
    $("div[jsui=slidey]").each(function(){
        $(this).Slide({
            effect : "scroolY",
            speed : "normal",
            timer : 3000
        });
    });

})