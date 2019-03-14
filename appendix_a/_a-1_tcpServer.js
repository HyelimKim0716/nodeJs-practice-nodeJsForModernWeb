const net = require('net');

// Create TCP server
net.createServer(function (socket) {

    // Connect event
    socket.on('data', function (data) {
        // Print input data
        console.log(data.toString());

        // Send data to client
        socket.write(data);
    });
}).listen(52273, function () {
    console.log('TCP Server Running at 127.0.0.1:52273');
});