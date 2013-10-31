$("thead td").each(function(i){
	var al=$(this).attr("align")
	$("tbody tr").each(function(){
		$("td",$(this)).eq(i).attr("align",al)
	})
})
