$("div[jsui=tgimg]").each(function () {
    var the = $(this);
    $(".list img", the).mouseover(function () {
        var a = $(this).attr("bgimg");
        if (a == "")
            return;
        $("#imgUrl").attr("src", a);
        $("#img_Big").attr("src", a);
        $("#a_jqzoom").attr("href", a);
    })
    $(".list img", the).eq(0).trigger("mouseover")
    $(".list li", the).mouseover(function () {
        $(this).addClass("on").siblings("li").removeClass("on")
    })
    var w = 60;
    var l = $(".list li").length - 5;
    $(".next", the).mouseover(function () {
        if (parseInt($(".list ul", the).css("left")) <= -l * w) {
            return;
        }
        $(".list ul").animate({ "left": parseInt($(".list ul", the).css("left")) - w })
    })
    $(".prev", the).mouseover(function () {
        if (parseInt($(".list ul", the).css("left")) >= 0) {
            return;
        }
        $(".list ul").animate({ "left": parseInt($(".list ul", the).css("left")) + w })
    })
});
if ($("a.jqzoom").length > 0) {
    head.js(jspath + "jqzoom.js", function () {
        var options =
	{
	    zoomWidth: 370,
	    zoomHeight: 370,
	    xOffset: 10,
	    yOffset: 0,
	    showEffect: 'show',
	    hideEffect: 'fadeout',
	    fadeoutSpeed: 'slow',
	    title: false
	}
        $("a.jqzoom").jqzoom(options);
    })
}