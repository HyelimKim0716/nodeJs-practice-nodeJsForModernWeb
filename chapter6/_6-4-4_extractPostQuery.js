const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if (request.method == 'GET') {
        fs.readFile('_6-4-4_HTMLPage2.html', function (error, data) {
            response.writeHead(200, { 'Content-Type' : 'text/html' });
            response.end(data)
        });
    } else if (request.method == 'POST') {
        request.on('data', function (data) {
            response.writeHead(200, { 'Content-Type' : 'text/html' })
            response.end('<h1>' + data + '</h1>');
        })
    }

}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});