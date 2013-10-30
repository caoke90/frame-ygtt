jQuery.jCookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', escape(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = unescape(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

/**
 * 异步写cookie
 */
function writeCn(){
	try {
		var cn = $.jCookie("cn");
		if (cn == null || cn == "" || isNaN(cn)) {
			cn = "0";
		}
		cn = cn.replace(/\\/g, "");
		cn = cn.replace(/\"/g, "");
		var url = "http://cart.360buy.com/cart/writeCn.action?cn=" + cn;
		jQuery.ajax( {
			type : "GET",
			dataType : "jsonp",
			url : url,
			data : null,
			cache : false,
			success : function(result) {
			},
			error : function(XMLHttpResponse) {
			}
		});

	} catch (e) {
	}
}