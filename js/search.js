
function InitPageClass() {
    var hd_pp = document.getElementById("hd_pp");
    var hd_fl = document.getElementById("hd_fl");
    var hdfl = document.getElementById("hdfl");
    var hd_cd = document.getElementById("hd_cd");
    var hd_jg = document.getElementById("hd_jg");
    var hd_sort = document.getElementById("hd_sort");
    var hd_cnt = document.getElementById("hd_cnt");
    var hd_key = document.getElementById("hd_key");
    var hd_count = document.getElementById("hd_count");
    document.getElementById("s_count").innerHTML = hd_count.value;

    if (hd_pp.value == "-1" || hd_pp.value == "") { document.getElementById("pp_bx").className = "on"; }
    else { document.getElementById("pp_" + hd_pp.value + "").className = "on"; }

    if (hdfl.value == "-1" || hd_fl.value.length == 4 || hd_fl.value=="") { document.getElementById("fl_bx").className = "on"; }
    else {
        if (document.getElementById("fl_" + hd_fl.value + "")) {
            document.getElementById("fl_" + hd_fl.value + "").className = "on";
        }
     }

    if (hd_cd.value == "-1" || hd_cd.value == "") { document.getElementById("cd_bx").className = "on"; }
    if (hd_cd.value == "0") { document.getElementById("cd_1").className = "on"; }
    if (hd_cd.value == "1") { document.getElementById("cd_2").className = "on"; }

    if (hd_jg.value == "") { document.getElementById("jg_bx").className = "on"; }
    if (hd_jg.value == "1-99") { document.getElementById("jg_1").className = "on"; }
    if (hd_jg.value == "100-299") { document.getElementById("jg_2").className = "on"; }
    if (hd_jg.value == "300-499") { document.getElementById("jg_3").className = "on"; }
    if (hd_jg.value == "500-999999") { document.getElementById("jg_4").className = "on"; }

    if (hd_sort.value == "") { document.getElementById("d_px1").className = "on"; document.getElementById("d_px1").innerHTML = "<a href='Search.aspx?spflcode=" + hd_fl.value + "&key=" + hd_key.value + "&spsbcode=" + hd_pp.value + "&cd=" + hd_cd.value + "&jg=" + hd_jg.value + "&sort=2&cnt=" + hd_cnt.value + "'>新品</a>"; }
    if (hd_sort.value == "1" || hd_sort.value == "2") {
        document.getElementById("d_px1").className = "on";
        if (hd_sort.value == "1")
        { document.getElementById("d_px1").innerHTML = "<a href='Search.aspx?spflcode=" + hd_fl.value + "&searchKey=" + hd_key.value + "&spsbcode=" + hd_pp.value + "&cd=" + hd_cd.value + "&jg=" + hd_jg.value + "&sort=2&cnt=" + hd_cnt.value + "'>新品</a>"; }
        if (hd_sort.value == "2")
        { document.getElementById("d_px1").innerHTML = "<a href='Search.aspx?spflcode=" + hd_fl.value + "&searchKey=" + hd_key.value + "&spsbcode=" + hd_pp.value + "&cd=" + hd_cd.value + "&jg=" + hd_jg.value + "&sort=1&cnt=" + hd_cnt.value + "'>新品</a>"; }
    }

    if (hd_sort.value == "3" || hd_sort.value == "6") {
        document.getElementById("d_px2").className = "on";
        if (hd_sort.value == "3")
        { document.getElementById("d_px2").innerHTML = "<a href='Search.aspx?spflcode=" + hd_fl.value + "&searchKey=" + hd_key.value + "&spsbcode=" + hd_pp.value + "&cd=" + hd_cd.value + "&jg=" + hd_jg.value + "&sort=6&cnt=" + hd_cnt.value + "'>销�?/a>"; }
        if (hd_sort.value == "6")
        { document.getElementById("d_px2").innerHTML = "<a href='Search.aspx?spflcode=" + hd_fl.value + "&searchKey=" + hd_key.value + "&spsbcode=" + hd_pp.value + "&cd=" + hd_cd.value + "&jg=" + hd_jg.value + "&sort=3&cnt=" + hd_cnt.value + "'>销�?/a>"; }
    }

    if (hd_sort.value == "4" || hd_sort.value == "5") {
        document.getElementById("d_px3").className = "on";
        if (hd_sort.value == "4")
        { document.getElementById("d_px3").innerHTML = "<a href='Search.aspx?spflcode=" + hd_fl.value + "&searchKey=" + hd_key.value + "&spsbcode=" + hd_pp.value + "&cd=" + hd_cd.value + "&jg=" + hd_jg.value + "&sort=5&cnt=" + hd_cnt.value + "'>价格</a>"; }
        if (hd_sort.value == "5")
        { document.getElementById("d_px3").innerHTML = "<a href='Search.aspx?spflcode=" + hd_fl.value + "&searchKey=" + hd_key.value + "&spsbcode=" + hd_pp.value + "&cd=" + hd_cd.value + "&jg=" + hd_jg.value + "&sort=4&cnt=" + hd_cnt.value + "'>价格</a>"; }

    }

    if (hd_cnt.value == "" || hd_cnt.value == "40") { document.getElementById("d_cnt1").className = "on"; }
    if (hd_cnt.value == "60") { document.getElementById("d_cnt2").className = "on"; }
    if (hd_cnt.value == "80") { document.getElementById("d_cnt3").className = "on"; }

}
