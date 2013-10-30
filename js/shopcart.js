$("div[jsui=shopcart]").each(function(){
			var $gw=$(".gwc label"),$t1=$("t1"),$cart=$(".gwclist"),$u1=$(".gwclist ul");
			$gw.hover(function(){
				if($cart.hasClass("dn")){
				    
					$.get("ajax/gwc.aspx",{"time": new Date().getTime() },function(data){
					
						$u1.html(data);
						var num=0;
						$("p.info").each(function(i){
						    var txt=$(this).html();
						    var arr=txt.split("：")
						    num=num+parseInt(arr[1])
						})
						
					    $gw.children("span").html(num)
					},"html")
					$cart.removeClass("dn");
				}else{
					$cart.addClass("dn");
				}
				$cart.mouseover(function(){
					$cart.removeClass("dn");
				}).mouseout(function(){
					$cart.addClass("dn");
				})
			})
})