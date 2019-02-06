// 모듈 추출
const http = require('http');

// 웹 서버 생성
const server = http.createServer();

// server 객체에 이벤트 연결
server.on('request', function (code) {
    // console.log('Request On. code : ', code);
    console.log('Request On.');
});

server.on('connection', function (code) {
    // console.log('Connection On. code : ', code);
    console.log('Connection On.');
});

server.on('close', function (code) {
    // console.log('Close On. code : ', code);
    console.log('Close On.');
});
// 웹 서버 실행
server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

const serverTest = function () {
    server.close();
    console.log('Close server');
};

setTimeout(serverTest, 5000);