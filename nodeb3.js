let http = require("http");
let fs = require('fs');

var EventEmitter = require('events').EventEmitter; 

var event = new EventEmitter(); 
var ss;


// let list = require('')
// var mongoose =require('mongoose')
// var zlist = require('./testdb/models/zlist.js')
// mongoose.connect('mongodb://localhost/testdb')
let server = http.createServer(function(req,res){
//console.log('111');
    var info ='';  
    req.addListener('data', function(chunk){  
	res.writeHead(200,{'Content-Type':'text/html'});
        
		info = chunk;  
		console.log(chunk.toString()[0]);
		ss = info.toString()[0];
		if(chunk.toString()[0]==="a"){
		    event.on(ss, function(){ 
            console.log('some_event 事件触发');
            res.end(info);
            }); 	
		}else if(chunk.toString()[0]==='b'){
			event.emit('a');
			res.end(info)
	    }else{
			res.end(info)
		}
    })  
   
});
server.listen(3000,'172.16.76.115');


/**
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000);
*/