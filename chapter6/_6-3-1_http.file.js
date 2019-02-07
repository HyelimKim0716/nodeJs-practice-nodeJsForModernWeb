const fs = require('fs');
const http = require('http');

// server 생성 및 실행
http.createServer(function (request, response) {
    // HTML 파일 읽음
    fs.readFile('_6-3-1_index.html', function (error, data) {
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        response.end(data);
    })
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0:52273');
});