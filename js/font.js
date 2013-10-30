$(".btn b").each(function (i) {
    var t = $(this).text();
    var arr = t.split(".");
    arr[0] = arr[0].replace(",", "")
    var sux = "00";
    if (arr.length > 2) {
        sux = arr[1];
    }
    $(this).html(arr[0] + ".<font size='1'>" + sux + "</font>")
})
