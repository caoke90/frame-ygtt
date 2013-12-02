
	document.write('<link rel="stylesheet" type="text/css" href="http://api.map.baidu.com/res/14/bmap.css"/>'); 
	seajs.use("http://api.map.baidu.com/getscript?v=1.4&key=&services=&t=20130219081854",function(){
		$("div[jsui=baidumap]").each(function(i){
			var mconfig={
				id:"mapygtg"+i,
				zoom:"14",
				center:"",
				adds:[]
			}
			
			$(this).attr("id",mconfig.id)
			mconfig.center=$(".center",this).text();
			$(".adds",this).each(function(i){
				mconfig.adds.push($(this).text());
			})
			
			var map = new BMap.Map(mconfig.id);
//			map.enableScrollWheelZoom();                            //启用滚轮放大缩小
			var index = 0;
			var myGeo = new BMap.Geocoder();
			myGeo.getPoint(mconfig.center, function(point){
			  if (point) {
				map.centerAndZoom(point, mconfig.zoom);
			  }
			});
			
			function bdGEO(){
				var add = mconfig.adds[index];
				geocodeSearch(add);
				index++;
			}
			function geocodeSearch(add){
				if(index < mconfig.adds.length){
					setTimeout(bdGEO,300);
				} 
				myGeo.getPoint(add, function(point){
				  if (point) {
					var marker = new BMap.Marker(new BMap.Point(point.lng, point.lat));
					map.addOverlay(marker);
				  }
				}, mconfig.center);
			}
			bdGEO()
		})

/*	
	$(".addmap").each(function(i){
		mconfig.adds.push($(this).text());
		var url="http://map.baidu.com/?newmap=1&s=con"+encodeURIComponent("&wd="+mconfig.center+$(this).text()+"&c=53")+"&fr=alam0&ext=1&from=alamap"
		$(".mod h2,.mod h3").eq(i).find("a").attr("href",url)
	})*/
	
	
	
	})

