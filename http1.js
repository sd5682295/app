var http = require('http');

let fs = require('fs');
//测试

let server = http.createServer(function(req,res){

  if (err) {
    console.log(err);

  }else {
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
	  
	  
    res.write(strn(html));
  };
  res.end()


});
server.listen(3000,'172.16.76.115');

function strn(ia){
	var sa =(ia.length-29);
	var ss
	ss = ia.substr(13,sa);
	return(ss)
	
	
}