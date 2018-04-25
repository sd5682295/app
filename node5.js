let http = require("http");
let fs = require('fs');
var querystring = require("querystring");
var EventEmitter = require('events').EventEmitter; 

var event = new EventEmitter();
var a = {'state':'close','connect':'off'};
var b = {'state':'close','connect':'off'};





// event.on('a',function (arg1) {
// 	if (arg1 ==="on") {
// 		a.connect = 'on'
// 	}else if (arg1 ==='open') {
// 		event.emit('aa','open')
// 	}
	
// });
// event.on('d',function (arg1) {
// 	if (arg1 ==="on") {
// 		d.connect = 'on'
// 	}else if (arg1 ==='open') {
// 		event.emit('dd','open')
// 	}
// event.on('b',function (arg1) {
// 	if (a.connect = 'on') {
// 		event.emit('a','open')
// 	}
// });
let server = http.createServer(function(req,res){
// console.log(req.headers);
    var info ='';  
    req.addListener('data', function(chunk){  

	res.writeHead(200,{'Content-Type':'text/html'});
        
		info+= chunk;  
		// console.log("11"+door[a][state]);
		
		// a.state = 'close';

		// console.log(querystring.stringify(info,",",":")) 
		// #chunk为二进制，info赋值后变成字符串，或用toString()也能变成字符串使用parse变成对象
		
/**
 * 收信格式key1=value1&key2=value2
 */
// console.log('aa')
			console.log(querystring.parse(info))
			// console.log(eval('(' + info + ')'))
		//console.log(chunk.toString()[0]);
		
		if(chunk.toString()[0]==="a"&&a.connect==="off"){
			a.connect = "on"			
		    event.once('a', function(arg1){ 
		    	if(arg1 ==="open"){
		    		console.log('some_event 事件触发111');
            res.end("open");
            // a.state = 'open';
            a.connect = 'off'
            event.emit('b');
            
        }else if (arg1 ==='end') {
        	console.log('some_event 自然结束333');
        	res.end("end");
        	a.connect = 'off'
        };   
            });
			setTimeout(function(){
				event.emit('a','end')
				},10000);
			
		}else if(chunk.toString()[0]==="d"&&d.connect==="off"){
			d.connect = "on"			
		    event.once('d', function(arg1){ 
		    	if(arg1 ==="open"){
		    		console.log('some_event 事件触发111');
            res.end("open");
            d.state = 'open';
            // event.emit('b');
            
        }else if (arg1 ==='end') {
        	console.log('some_event 自然结束333');
        	res.end("end");
        	d.state = 'open'
        };   
            });
			setTimeout(function(){if(d.state = "close"){
				event.emit('d','end')
				}},10000);
			
		}else if(chunk.toString()[0]==='b'&&a.connect ==="on"){
			
			
			event.once('b', function(){ 
            console.log('门已打开');
            res.end("opened");
            });
            event.emit('a','open');
            

			
	    }else if(chunk.toString()[0]==='c'&&a.connect ==="on"){
			
			
			event.once('c', function(){ 
            console.log('门已打开');
            res.end("opened");
            });
            event.emit('d','open');
            

			
	    };
    })  
   
});
server.listen(3000,'172.16.76.115');


// function lob(ia){
// 	var ary = ia.split("&");
// 	var str = "";
// 	var len  = ary.length;
// 	str = ary[0];
// 	if(len > 0){
// 		for(var i = 1;i<len;i++){
		
// 		str+=(","+ary[i])
// 	};
// 	};
	
// 	ary = str.split("=");
// 	str ="";
// 		var len  = ary.length;
// 	str = ary[0];
// 	if(len > 0){
// 		for(var i = 1;i<len;i++){
		
// 		str+=(":"+ary[i])
// 	};
// 	};
	
// 	str = "{"+str+"}";
	
// 	  return(str)
// }

/**
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); r
}, 1000);
*/