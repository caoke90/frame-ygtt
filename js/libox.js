$("[jsui=libox]").each(function () {
    var the = $(this);
    $(".title", the).each(function (i) {
        $(this).click(function () {
            $(".title", the).eq(i).toggleClass("on")
            $(".module", the).eq(i).toggle("fast")
        })
    })
    $(".allbox", the).toggle(function () {
        $(this).addClass("on");
        $(".title", the).addClass("on");
        $(".module", the).show("fast");
    }, function () {
        $(this).removeClass("on");
        $(".title", the).removeClass("on");
        $(".module", the).hide();
    })
		if($(".title.on",the).length==0){
			 $(".allbox", the).click()
		}else{
			$(".title.on",the).removeClass("on").trigger("click")
			}
   
})
