const express = require('express');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.use(function (request, response) {
    const output = [];
    for (let i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }

    response.send(output);
});

// 서버 실행
app.listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});

