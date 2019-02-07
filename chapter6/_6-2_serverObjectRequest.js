// require('http').createServer(function (request, response) {
//     response.writeHead(200, { 'Content-type' : 'text/html' });
//     response.end('<h1>Hello World...!</h1>');
// }).listen(52273);


const server = require('http').createServer(function (request, response) {
    response.writeHead(200, { 'Content-type' : 'text/html' });
    response.end('<h1>Hello World...!</h1>');
    server.close();
});

server.listen(52273);