function ShowMENU(n,obj) {
    var objs = document.getElementById("dv_Spms").getElementsByTagName("li");
    for (var i = 0; i < objs.length; i++) {
        objs[i].className = "";
    }
    obj.className = "cur";
    if (n == 0) {
        document.getElementById("d_playxx").style.display = "block";
        document.getElementById("d_playgg").style.display = "none";
        document.getElementById("d_playqd").style.display = "none";
    }
    if (n == 1) {
        document.getElementById("d_playxx").style.display = "none";
        document.getElementById("d_playgg").style.display = "block";
        document.getElementById("d_playqd").style.display = "none";
    }
    if (n == 2) {
        document.getElementById("d_playxx").style.display = "none";
        document.getElementById("d_playgg").style.display = "none";
        document.getElementById("d_playqd").style.display = "block";
    }
}

function iFrameHeight(h) {
    var ifm = document.getElementById("rightFrame");
    h = parseFloat(h.replace("px", "")) + 30;
    ifm.height = h;
}

function ShowMs() {  
        $("#rightFrame").html("加载中...");
        $("#rightFrame").attr("src", "Spmscontent.aspx?spid=" + $("#hd_Sp_id").val());
}
jQuery(function () {
    ShowMs();
});

