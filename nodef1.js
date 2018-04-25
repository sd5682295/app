let http = require("http");
let fs = require('fs');
var EventEmitter = require('events').EventEmitter; 
var querystring = require("querystring");
var event = new EventEmitter();
var con = 0;


  







newserver('172.16.76.115','3000');
// console.log("11"+querystring.stringify(info.data,",",":"));
// event.on('pub',function(arg1, arg2){
// 					console.log('收到信号：'+arg1+arg2)
// 				   })




/**
 * 
 * 服务器函数
 * 输入ip和iport开启服务器
 * 
 */

function newserver(iip,iport){
	
    let server = http.createServer(function(req,res){
    	function obj() {}
var ary = new obj();
        // console.log(req.url);
        ary.url = req.url;
         var dinfo = {};
         var dinfo = '';
        
        req.addListener('data', function(chunk){

			dinfo += chunk; 
			// this.info.data = dinfo
			/**
 * 收信格式key1=value1&key2=value2
 */
		
			 ary.data = querystring.parse(dinfo);
				
				ary.signalw = (ary.data.name+'write'+con);
				ary.signale = (ary.data.name+'end'+con);
				con+=1;
				console.log(ary);
	
			event.emit('pubb',ary);
	       res.writeHead(200,{'Content-Type':'text/html'});
			       event.once(ary.signalw,function(arg1){
					   res.write(arg1.data);
					   

				   });

			       event.once(ary.signale,function(arg1){
					   res.end(arg1.data);
					 
				   });
			

        })  
    });
    server.listen(iport,iip);

	event.on('pubb',function(arg1){
		FRout(arg1)
				   });

}
function FRout(arg1) {
		fs.readFile('.'+arg1.url,function (err,data) {
			res.write(arg1.data);
event.emit('arg1.signalw',fhtml);
event.emit('arg1.signale',"")
 
})	
}

/*
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~函数结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */