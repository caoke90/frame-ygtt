$(".sxspwz b").css({ "font-size": "14px" })
$(".sxspwz b").each(function (i) {
    var t = $(this).text();
    var arr = t.split(".");
    arr[0] = arr[0].replace(",", "")
    var sux = "00";
    if (arr.length > 1) {
        sux = arr[1];
    }
    $(this).html(arr[0] + ".<font style='font-size:11px;'>" + sux + "</font>")
})
$(".sxspwz b").css({ "font-size": "14px" })