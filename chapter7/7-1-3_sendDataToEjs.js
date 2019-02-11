const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

http.createServer(function (request, response) {
    // read ejsPage.ejs
    fs.readFile('7-1-3_ejsPage.ejs', 'utf-8', function (error, data) {
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        response.end(ejs.render(data, {
            name: 'RintIanTta',
            description: 'Hello ejs With Node.js!'
        }));
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});