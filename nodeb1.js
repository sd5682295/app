let http = require("http");
let fs = require('fs');

// let list = require('')
// var mongoose =require('mongoose')
// var zlist = require('./testdb/models/zlist.js')
// mongoose.connect('mongodb://localhost/testdb')
let server = http.createServer(function(req,res){
	console.log('111');
    var info ='';  
    req.addListener('data', function(chunk){  
	res.writeHead(200,{'Content-Type':'text/html'});
        
		info = chunk;  
		console.log(chunk.toString());
     })  
    req.addListener('end', function(place){  
      
		res.end(place);
        
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