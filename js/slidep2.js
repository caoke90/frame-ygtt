define(function(require,exports,module){
    var $=require("com/jquery")
    require("com/jq.Slide.js")
	$("div[jsui=slidep2]").each(function(){
		var len=$(".JQ-slide-content>span",this).length/2;
		for(var i=0;i<len;i++){
			$(".JQ-slide-content>span:lt(2)",this).wrapAll('<li></li>');
		}
	  $(this).Slide({
		  effect : "scroolLoop",
		  speed : "normal",
		  autoPlay:false,
		  timer : 3000,
		  steps:1
	  });
	 });
});
