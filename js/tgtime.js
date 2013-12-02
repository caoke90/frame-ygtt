define(function(require,exports,module){
	function havetime(endtime,put) {
		var now = new Date();
		var endtime=endtime;
		var endDate = new Date(endtime.replace(/-/ig,"/"));
		var leftTime = endDate.getTime() - now.getTime();
		var leftsecond = parseInt(leftTime / 1000);
		var day1 = parseInt(leftsecond / (24 * 60 * 60));
		var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
		var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
		var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
	
		if (hour < 0) {
			minute = 0;
			second = 0;
		}
		if (minute >= 0 && second >= 0 && day1 >= 0 && hour >= 0) {
			put([day1,hour,minute,second])
			setTimeout(function(){havetime(endtime,put)},1000)
		}
	}
	$(".endtime").each(function(i){
		var t=$(this).find("span").text();
		havetime(t,function(a){
			for(var k=0;k<4;k++){
				if(a[k]<10){
					a[k]="0"+a[k];
				}
			}
			$("[jsui=tgtime]").eq(i).html(a[0]+"天"+a[1]+":"+a[2]+":"+a[3]+"")
		})
	})
})