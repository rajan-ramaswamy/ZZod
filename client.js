var io = require('socket.io-client');
var serverUrl = 'http://localhost:3000';
var conn = io.connect(serverUrl);

var clientId = process.argv[2];

//get a test plan from the server
conn.on('testPlan', function(testPlan) {
  console.log(testPlan);

  //once we have a plan, start sending updates
  setInterval(function() {
    conn.emit('pumpData', {clientId: clientId, rpm: 234, sensor1: true, sensor2: false});
  }, 1000);
});

//Testing the Git tools
//Change made on branch "testing"

