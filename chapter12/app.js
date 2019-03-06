var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

/*
    공연장 좌석 정보 저장
    0 : 빈공간
    1 : 예약 가능 좌석
    2: 예약 완
 */
var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

// 웹 서버를 생성합니다.
var app = express();

// 라우트를 수행합니다.
app.get('/', function (request, response, next) {
    fs.readFile('HTMLPage.html', function (error, data) {
        // seats 를 JSON 형태로 제공
        response.send(data.toString());
    });
});

app.get('/seats', function (request, response, next) {
    response.send(seats);
});

// 웹 서버를 실행합니다.
var server = http.createServer(app);
server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 소켓 서버를 생성 및 실행합니다.
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    // reserve 이벤트를 받으면 변수 seats 변경
    // 서버로 좌석 정보가 전송되면 seats 변수를 변경하고 모든 클라이언트에 예약된 좌석과 관련된 정보 전달
    socket.on('reserve', function (data) {
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });
});
