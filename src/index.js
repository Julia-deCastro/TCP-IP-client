var net = require('net');
const SERVER_HOST = '127.0.0.1'  // Server IP
const SERVER_PORT = 8080         // Server Port

// Starts a connection to the server
var client = new net.Socket();
client.connect(SERVER_PORT, SERVER_HOST, function () {
  console.log('Connected');
});

// Write a message to the server
client.write('Hello, server! Love, Client.');

// Receive datas from server
client.on('data', function (data) {
  console.log('Received: ' + data);
});

// Detects that the server closed the connection
client.on('close', function () {
  console.log('Connection closed');
});