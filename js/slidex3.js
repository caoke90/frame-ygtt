head.js(jspath + "jq.Slide.js", function () {
    $("div[jsui=slidex3]").each(function () {
        $(this).Slide({
            effect: "scroolLoop",
            speed: "normal",
            timer: 3000,
            autoPlay: false,
            steps: 3
        });
    });
});