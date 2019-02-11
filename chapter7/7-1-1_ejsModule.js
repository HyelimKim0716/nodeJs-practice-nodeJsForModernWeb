const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    // read ejsPage.ejs
    fs.readFile('7-1-1_ejsPage.ejs', 'utf-8', function (error, data) {

    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});