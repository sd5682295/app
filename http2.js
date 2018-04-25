var http = require('http');

//目标网站，嘿嘿，这个网站有很多实习职位
var pageUrl = 'http://www.baidu.com';

http.get(pageUrl, function(res) {
    var html = '';
    res.on('data', function(data) {
        html += data;
    });
    res.on('end', function() {
        console.log(strn(html));
		
    });
});


function strn(ia){
	var sa =(ia.length-29);
	var ss
	ss = ia.substr(13,sa);
	return(ss)
	
	
}