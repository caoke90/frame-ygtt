$(".navlix").each(function(){
	var the=$(this);
	var l=$("li",the).length
	for(var i=0;i<l;i++){
		if((i+1)%3==0){
			$("li",the).eq(i).after('<div class="clr"><div>')
		}
	}
	
})