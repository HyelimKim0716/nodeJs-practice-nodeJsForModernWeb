const http = require('http');
const fs = require('fs');
const jade = require('jade');

http.createServer(function (request, response) {
    // read ejsPage.ejs
    fs.readFile('7-2-3_jadePage.jade', 'utf-8', function (error, data) {
        const fn = jade.compile(data);
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        response.end(fn({
            name: 'Hayley',
            description: 'Hello jade With Node.js!'
        }));
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});