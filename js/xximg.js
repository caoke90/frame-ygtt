$("[jsui=xximg]").each(function(){
	var the=$(this);
	var pfn=$(".datanum",the).text();
	$(".e2 span",the).text(pfn);
	var pfleft=(pfn/5)*378-5;
	$(".e2 span",the).css({"left":pfleft+"px"});
	var jqnum=(pfn/5)*66;
	$(".e1 img",the).css({"clip":"rect(auto "+jqnum+"px auto auto)"})
})