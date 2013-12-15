define(function(require,exports,module){
//图片延迟加载效果
if ($("img[data-original]").length > 0) {
    require("lazyload/jquery.lazyload.js")
    $("img[data-original]").lazyload({
        threshold: 350,
        effect: "fadeIn",
        skip_invisible: false,
        "": ""
    });

}

//a 添加属性title
$(".block a[title!='']").each(function () {
    $(this).attr("title", $(this).text())
})

//input type=text 切换的效果
$("#keyword").each(function () {
    var txt = $(this).val();
    $(this).focus(function () {
        if ($(this).val() == txt) { $(this).val("") }
    }).blur(function () {
        if ($(this).val() == "") { $(this).val(txt) }
    })
})



$(".price b").each(function (i) {
    var t = $(this).text();
    var arr = t.split(".");
    arr[0] = arr[0].replace(",", "")
    var sux = "00";
    if (arr.length > 1) {
        sux = arr[1];
    }
    $(this).html(arr[0] + ".<font style='font-size:12px;'>" + sux + "</font>")
})

})