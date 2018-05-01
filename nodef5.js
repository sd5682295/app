let http = require("http");
let fs = require('fs');
var EventEmitter = require('events').EventEmitter; 
var querystring = require("querystring");
var event = new EventEmitter();
var con = 0;




newserver('172.16.76.115','3000');


/**
 * 
 * 服务器函数
 * 输入ip和iport开启服务器
 * 
 */



// function server_callback(sig,data_obj,key_ary) {
//         event.once(sig,function(data){
//         // console.log(JSON.parse(arg1).a);
//         var s1 = JSON.parse(arg1)[JSON.parse(JSON.stringify(ary)).data.a];
//         var s2 = JSON.stringify(s1);
//         res.end(s2);
                     
//                    });
//     }





function newserver(iip,iport){
	
    let server = http.createServer(function(req,res){

        function obj() {}
        var ary = new obj();
        var dinfo = {};
        var dinfo = '';
        ary.url = req.url;
   
        req.addListener('data', function(chunk){

		    dinfo += chunk; 
	
/**
 * 收信格式key1=value1&key2=value2
 * querystring.parse(e)将收取的信息转换成对象
 */
		
			ary.data = querystring.parse(dinfo);


/**
 * 拼接通讯端口，con避免端口重复
 */
				
//# ary.signalw = (ary.data.name+'write'+con);

function name_to_sig(iname) {
   isig[con] = (ary.data.name+'end'+con)
}
			ary.signale = (ary.data.name+'end'+con);
			con+=1;
				
/**
 * 链接成功的头反馈
 */

			
	        res.writeHead(200,{'Content-Type':'text/html'});



			       event.once(ary.signalw,function(arg1){

			       	// console.log(JSON.parse(arg1).a);
			       	var s1 = JSON.parse(arg1)[JSON.parse(JSON.stringify(ary)).data.a];
			       	var s2 = JSON.stringify(s1)


					   res.end(s2);
					 
				   });
				   event.emit('pubb',ary);
				
			

        });


///////////////////////////////////////////////////////////////////////////////

    

 
     
          
    });




    server.listen(iport,iip);



	event.on('pubb',function(arg1){
		
		if (arg1.url === '/action') {
			if(arg1.data.type === "did"&&arg1.data.name === "123456"){
        	// console.log('qqq')
        	event.emit(arg1.signalw,arg1)
            }
        }else if(arg1.url === '/db'){
        	
        	var ac = arg1.data.a;
        	console.log(ac);
            fs.readFile('./test.txt',function (err,data) {
                if (err) {
                    console.log(err);

                }else {
                    event.emit(arg1.signalw,data)
                };
                    
                })      
                   }
				   });

}


/*
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~函数结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

