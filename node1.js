let http = require("http");
let fs = require('fs');

// let list = require('')
// var mongoose =require('mongoose')
// var zlist = require('./testdb/models/zlist.js')
// mongoose.connect('mongodb://localhost/testdb')
let server = http.createServer(function(req,res){
fs.readFile('.'+req.url,function (err,data) {
  if (err) {
    console.log(err);

  }else {
    res.write(data);
  };
  res.end()
})

});
server.listen(3000,'172.16.76.115');

let io = require('socket.io')(server);
io.on('connection',function (sock) {

    sock.emit('time',Date.now());
    sock.on('post',function (data) {
var uid =data.uid
        console.log(uid);
// _zlist = new zlist({
//   kind : data.data.kind,
//   name : data.data.name,
//   deviceId : data.data.deviceId,
//   no : data.data.no,
//
// })
// _zlist.save(function (err,zlist) {
//   sock.emit('saveback',('/testdb/'+zlist._id));
// })

    })

});
