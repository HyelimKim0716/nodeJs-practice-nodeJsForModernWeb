const net = require('net');

// Create TCP server
net.createServer(function (socket) {

    // 응답 헤더 작성
    socket.write('HTTP/1.1 200OK \n');
    socket.write('Server: Hayley Node.js Custom Server\n');
    socket.write('Content-Type: text/html\n');

    // 응답 본문 작성
    // 'Hello World!' length : 21
    socket.write('Content-Length: 21\n');
    socket.write('\n');
    socket.write('<h1>Hello World!</h1>');

    // 응답
    socket.end();
}).listen(52273, function () {
    console.log('TCP Server Running at 127.0.0.1:52273');
});