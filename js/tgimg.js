define(function(require,exports,module){
$("div[jsui=tgimg]").each(function () {
    var the = $(this);
    $(".list img", the).mouseover(function () {
         var a = $(this).attr("bgimg");
            if (a==false) {
                return;
            }
		  $("#imgUrl").attr("src", a);
		  $("a.jqzoom").attr("href", a)
		$("a.jqzoom img").attr("src", a)
    })
    $(".list img", the).eq(0).trigger("mouseover")
    $(".list li", the).mouseover(function () {
        $(this).addClass("on").siblings("li").removeClass("on")
    })
    var w = 120;
    var l = $(".list li").length - 4;
    $(".next", the).click(function () {
        if (parseInt($(".list ul", the).css("top")) <= -l * w) {
            return;
        }
        $(".list ul").animate({ "top": parseInt($(".list ul", the).css("top")) - w })
    })
    $(".prev", the).click(function () {
        if (parseInt($(".list ul", the).css("top")) >= 0) {
            return;
        }
        $(".list ul").animate({ "top": parseInt($(".list ul", the).css("top")) + w })
    })
});
if ($("a.jqzoom").length > 0) {
    require("com/jqzoom.js")
        var options =
		{
			zoomWidth: 500,
			zoomHeight: 500,
			xOffset: 10,
			yOffset: 0,
			showEffect: 'show',
			hideEffect: 'fadeout',
			fadeoutSpeed: 'slow',
			title: false
		}
        $("a.jqzoom").jqzoom(options);

}
})