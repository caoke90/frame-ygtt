define(function(require,exports,module){
	$("div[jsui=jumpto]").each(function(){
		var the=this
		var ori=$(the).offset().top
		
		$(window).scroll( function() { 
			if($("body").scrollTop()>ori){
				
				$(the).css({"position":"absolute","top":$("body").scrollTop()+"px"})
				var cur=0;
				$(".blo5 .title,.blo6 .title").each(function(i){
					if($("body").scrollTop()>$(this).offset().top-150){
						cur=i+1
					}
				})
				$("li",the).removeClass("on")
				$("li",the).eq(cur).addClass("on")
				
			}else{
				$(the).css("position","static")
			}
		
		});
		$("li",the).each(function(i){
			$(this).click(function(){
				$("body").scrollTop($(".blo4,.blo5 .title,.blo6 .title").eq(i).offset().top-50)
			})
		})
		
	})
})