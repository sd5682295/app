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
    	if (req.url === "/action"){
   	        function obj() {}
            var ary = new obj();
    		var dinfo = {};
            var dinfo = '';
        
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

				ary.signale = (ary.data.name+'end'+con);
				con+=1;
				
/**
 * 链接成功的头反馈
 */

			
	           res.writeHead(200,{'Content-Type':'text/html'});


               // console.log('666');
			 //   event.once(ary.signalw,function(arg1){
			 //       console.log(arg1.data);
    //                var ss = arg1.data;
				//    res.write('aa');
				// });

			       event.once(ary.signalw,function(arg1){
			       	// console.log(arg1.data);
                   // var ss = arg1.data;
					   res.end(querystring.stringify(arg1.data,",",":"));
					 
				   });
				   event.emit('pubb',ary);
				console.log('111');
			

        })
    	}else{
fs.readFile('./html'+req.url,function (err,data) {
  if (err) {
    console.log(err);

  }else {
    res.write(data);
  };
  res.end()
})
    	}

 
     
          
    });
    server.listen(iport,iip);

	event.on('pubb',function(arg1){
		console.log('222');
        if(arg1.data.type === "did"&&arg1.data.name === "123456"){
        	// console.log('qqq')
        	event.emit(arg1.signalw,arg1)
        }
				   });

}


/*
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~函数结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */