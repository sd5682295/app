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








