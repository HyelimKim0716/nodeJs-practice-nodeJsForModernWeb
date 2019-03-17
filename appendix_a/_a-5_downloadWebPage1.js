// 모듈을 추출합니다.
var http = require('http');

// 기상청의 RSS 데이터를 긁어옵니다.
http.get({
    host: 'www.kma.go.kr',
    path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
}, function (response) {
    // 데이터를 다운로드합니다.
    response.setEncoding('utf8');
    response.on('data', function (data) {
        // 여러 번 데이터를 나누어 받으므로 RSS 데이터를 분할된 상태로 가져오게 됨
        console.log('Data Download');
    });
});
