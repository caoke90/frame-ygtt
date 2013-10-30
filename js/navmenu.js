$(function(){
if($(".top4").length>1){
	var b;
	$(".navbox li").each(function(index){
		$(this).mouseover(function(){
			$(".navlix").eq(b).hide();
			$(".navbox li").eq(b).removeClass("on");
			$(this).addClass("on");
			$(".navlix").eq(index).show();
			b=index;
		}).mouseout(function(){
			$(this).removeClass("on");
			$(".navlix").eq(index).hide();
		})
	})
	$(".navlix").each(function(index){
		$(this).mouseover(function(){
			$(".navlix").eq(b).show();
			$(".navbox li").eq(b).removeClass("on");
			$(".navbox li").eq(index).addClass("on");
		}).mouseout(function(){
			$(".navbox li").eq(b).removeClass("on");
			$(".navlix").eq(b).hide();
		})
	})

}else{
	var b;
	$(".navbox li").each(function(index){
	$(this).mouseover(function(){
			$(".navlix").eq(b).hide();
			$(".navbox li").eq(b).removeClass("on");
			$(this).addClass("on");
			$(".navlix").eq(index).show();
			b=index;
		})
	})
	$(".navlix").each(function(index){
		$(this).mouseover(function(){
			$(".navlix").eq(b).show();
			$(".navbox li").eq(b).removeClass("on");
			$(".navbox li").eq(index).addClass("on");
		})
	})
	var a;
	$(".nav,.top4").mouseover(function(){
		clearTimeout(a);
		$(".top4.dn").removeClass("dn");
	}).mouseout(function(){
		a=setTimeout(function(){$(".top4").addClass("dn")},100);
	})
	$(".nav").trigger("mouseout");
}

})