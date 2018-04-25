let http = require("http");
let fs = require('fs');
var querystring = require("querystring");
var EventEmitter = require('events').EventEmitter; 

var event = new EventEmitter(); 
var ss;


// let list = require('')
// var mongoose =require('mongoose')
// var zlist = require('./testdb/models/zlist.js')
// mongoose.connect('mongodb://localhost/testdb')
let server = http.createServer(function(req,res){
console.log(req.headers);
    var info ='';  
    req.addListener('data', function(chunk){  

	res.writeHead(200,{'Content-Type':'text/html'});
        
		info+= chunk;  
		console.log("11"+info)
		//console.log(querystring.stringify(chunk,",",":"))  #chunk为二进制，info赋值后变成字符串，或用toString()也能变成字符串使用parse变成对象
			// console.log(querystring.parse(info))
		//console.log(chunk.toString()[0]);
		ss = info.toString()[0];
		if(chunk.toString()[0]==="a"){
		    event.on(ss, function(){ 
            console.log('some_event 事件触发');
            res.end(info);
            });
			setTimeout(function(){console.log('some_event 自动结束');res.end("aaaaaaaaa");},10000);
		}else if(chunk.toString()[0]==='b'){
			event.emit('a');
			res.end(lob(info.toString()))
	    }else{
			res.end(lob(info.toString()))
		};
    })  
   
});
server.listen(3000,'172.16.76.115');


function lob(ia){
	var ary = ia.split("&");
	var str = "";
	var len  = ary.length;
	str = ary[0];
	if(len > 0){
		for(var i = 1;i<len;i++){
		
		str+=(","+ary[i])
	};
	};
	
	ary = str.split("=");
	str ="";
		var len  = ary.length;
	str = ary[0];
	if(len > 0){
		for(var i = 1;i<len;i++){
		
		str+=(":"+ary[i])
	};
	};
	
	str = "{"+str+"}";
	
	  return(str)
}

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