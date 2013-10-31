$("div[jsui=num]").each(function(){
	$("i",this).click(function(){
		if($(this).text()=="+"){
			$(this).siblings(":text").val(function(){
				if(!parseInt(this.value)){
					return 1;
				}
				return parseInt(this.value)+1;
			})
		}else{
			$(this).siblings(":text").val(function(){
				if(parseInt(this.value)<=1){
					alert("数字不能小于1")
					return 1;
				}
				if(!parseInt(this.value)){
					return 1;
				}
				return parseInt(this.value)-1;
			})
		}
	})
})