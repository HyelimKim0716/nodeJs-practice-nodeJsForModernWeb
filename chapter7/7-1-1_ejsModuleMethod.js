const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

http.createServer(function (request, response) {
    // read ejsPage.ejs
    fs.readFile('7-1-1_ejsPage.ejs', 'utf-8', function (error, data) {
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        response.end(ejs.render(data));
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});