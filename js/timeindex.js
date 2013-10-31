function havetime(endtime, put) {
    var now = new Date();
    var endtime = endtime;
    var endDate = new Date(endtime.replace(/-/ig, "/"));
    var leftTime = endDate.getTime() - now.getTime();
    var leftsecond = parseInt(leftTime / 1000);
    var day1 = parseInt(leftsecond / (24 * 60 * 60));
    var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
    var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
    var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
    if (hour < 0) {
        minute = 0;
        second = 0;
    }
    if (minute >= 0 && second >= 0 && day1 >= 0 && hour >= 0) {
        setTimeout(function () { havetime(endtime, put) }, 1000)
    }
    put([day1, hour, minute, second])
}
$("[jsui=timeindex]").each(function () {
    var $this = $(this)
    $(".etime", $this).each(function (i) {
        var t = $(this).find("span").text();
        havetime(t, function (a) {
            if (a[1] < 0) {
                a[1] = 0;
            }
            for (var k = 0; k < 4; k++) {
                if (a[k] < 10) {
                    a[k] = "0" + a[k];
                }
            }
            $(".time").eq(i).html("距离结束时间：<span>" + a[1] + "</span>:<span>" + a[2] + "</span>:<span>" + a[3] + "</span>")
        })
    })
    $(".btime", $this).each(function (i) {
        var t = $(this).find("span").text();
        var the = $(this)
        havetime(t, function (a) {
            if (a[0] >= 0 && a[1] >= 0 && a[2] >= 0 && a[3] >= 0) {
                $("input", the.siblings(".btn")).val("即将开始");
            } else {
                $("input", the.siblings(".btn")).val("我要参团");
            }
        })
    })
})
