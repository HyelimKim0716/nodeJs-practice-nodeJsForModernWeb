const http = require('http');

http.createServer(function (request, response) {
    if (request.headers.cookie) {
        const cookie = request.headers.cookie.split(';').map(function (element) {
            var element = element.split('=');
            return {
                key: element[0],
                value: element[1]
            };
        });

        response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie' : [
                'name = RintIanTta',
                'region = Seoul'
            ]
        });

        response.end('<h1>쿠기 생성!' + JSON.stringify(request.headers.cookie) + '</h1>');
    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});