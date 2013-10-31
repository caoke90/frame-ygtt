//input type=text 切换的效果
$(":text").each(function(){
	var txt=$(this).val();
	$(this).focus(function(){
		if($(this).val()==txt){$(this).val("")}
	}).blur(function(){
		if($(this).val()==""){$(this).val(txt)}
	})
})
//a 添加属性title
$(".block a[title!=]").each(function(){
	$(this).attr("title",$(this).text())
})