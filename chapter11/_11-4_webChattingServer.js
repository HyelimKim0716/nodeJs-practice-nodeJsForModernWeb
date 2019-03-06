var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// create web server
var server = http.createServer(function (request, response) {
    // read .html file
    fs.readFile('_11-4_HTMLPage.html', function (error, data) {
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// Create socket server
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    // When server got message event
    socket.on('message', function (data) {
        // Send message event with data to client
        io.sockets.emit('message', data);
    })
});