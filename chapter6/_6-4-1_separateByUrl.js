const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (request, response) {
    const pathname = url.parse(request.url).pathname;

    if (pathname == '/') {
        fs.readFile('_6-4-1_index.html', function (error, data) {
            response.writeHead(200, { 'Content-Type' : 'text/html' })
            response.end(data)
        })
    } else if (pathname == '/OtherPage') {
        fs.readFile('_6-4-1_otherPage.html', function (error, data) {
            response.writeHead(200, { 'Content-Type' : 'text/html'})
            response.end(data)
        })
    }

}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});