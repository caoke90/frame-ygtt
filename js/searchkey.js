
head.js(jspath + "jquery.autocomplete.js", function () {
    function formatItem(row) {
        return " <p>" + row[0] + " </p>" + " <span>" + row[1] + "个结果</span>";
    }
    function formatResult(row) {
        return row[0].replace(/(<.+?>)/gi, '');
    }

    //认传入的参数是：q（输入值），limit（返回结果的最大值）
    $(".searchkeyidname").autocomplete("/AjaxPage/WebPage/search.ashx",
	{
	    delay: 10,
	    matchSubset: 1,
	    matchContains: true,
	    cacheLength: 10,
	    //此处为传递参数
	    extraParams: { p: function () { return $(".searchkeyidname").val(); } },
	    formatItem: formatItem,
	    formatResult: formatResult
	}).result(function (event, item) {
	    location.href = item[2];
	});
})