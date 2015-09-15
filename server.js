var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');


//look for new connections to the socket
io.on('connection', function(socket){

  //when client connects, send out test plan
  socket.emit('testPlan', {
    testplan: "tp1",
  });

  //for now just log pump updates to the console
  socket.on('pumpData', function(data) {
    data["time"] = new Date().getTime();
    fs.appendFile('message.txt', data, function (err) {
       if (err) throw err;
    console.log('Data logged to file!');
    });
    var len = Object.keys(data).length;
    for (i=0;i<len;i++){
        console.log(data[Object.keys(data)[i]]);
     }
  });
});

//startup the server
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//change made on branch testing
