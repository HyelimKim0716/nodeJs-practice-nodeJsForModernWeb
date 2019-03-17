// 모듈을 추출합니다.
var net = require('net');
var crypto = require('crypto');

//변수를 선언합니다.
var guid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

// TCP 서버를 생성합니다.
net.createServer(function (socket) {
    socket.on('data', function (data) {
        // 요청 헤더로부터 문자열 websocket 과 HTTP 를 찾아 요청 구분

        if (/websocket/.test(data.toString())) {
            // 업그레이드 요청 시 Handshake 수행

            // Socket Key를 추출합니다.
            var headers = data.toString().split('\n');
            var socketKey = '';
            headers.forEach(function (item) {
                var dictionary = item.split(':');
                if (dictionary.length == 2
                    && dictionary[0].toLowerCase().trim() == 'sec-websocket-key') {
                    socketKey = dictionary[1].trim();
                }
            });

            // Response Key를 생성합니다.
            var longKey = socketKey + guid;
            var shasum = crypto.createHash('sha1').update(longKey);
            var outputKey = shasum.digest('base64');

            // 응답 헤더를 작성합니다.
            socket.write('HTTP/1.1 101 Switching Protocols\r\n');
            socket.write('Upgrade: WebSocket\r\n');
            socket.write('Connection: Upgrade\r\n');
            socket.write('Sec-WebSocket-Accept: ' + outputKey + '\r\n\r\n');

            // 1초마다 클라이언트로 메시지 전달
            setInterval(function () {
                var output = 'Hello Web Socket Server .. !';

                // 버퍼 생성
                var frameBuffer = new Buffer(2 + output.length);

                frameBuffer[0] = 0x81;              // 첫 번째 바이트 : 1000 0001
                frameBuffer[1] = output.length;     // 두 번째 바이트 : 문자열 길이

                // 세 번째 바이트부터 문자열 입력
                // (현재 예제에서 데이터가 127 바이트를 넘지 않을 것이라고 가정하므로 별다른 예외처리를 하지 않음)
                for (var i = 0; i < output.length; i++) {
                    frameBuffer[i + 2] = output.charCodeAt(i)
                }

                socket.write(frameBuffer);
            }, 1000);

        } else if (/HTTP/.test(data.toString())) {
            // HTTP 요청이 오는 경우 HTML 페이지 생성
            // HTML 문자열 배열을 생성
            var output = [];
            output.push('<script>');

            // 웹 소켓 생성
            output.push('    var socket = new WebSocket("ws://localhost:52273/")');
            output.push('    socket.onopen = function (event) {');
            output.push('        console.log("Web Socket Open.");');

            // 1초마다 서버로 문자열 'From Client' 전송
            output.push('        setInterval(function () {');
            output.push('            socket.send("From Client");');
            output.push('        }, 1000);');
            output.push('    };');
            output.push('    socket.onerror = function (error) {');
            output.push('        console.log(error);');
            output.push('    };');
            output.push('    socket.onmessage = function (event) {');
            output.push('        console.log("Web Socket Data: " + event.data);');
            output.push('    };');
            output.push('    socket.onclose = function (event) {');
            output.push('        console.log("Web Socket Close.");');
            output.push('    };');
            output.push('</script>');

            // 문자열로 변환
            output = output.join('\n');

            // 응답 헤더를 작성
            socket.write('HTTP/1.1 200 OK\r\n');
            socket.write('Server: RintIanTta Node.js Custom Server\r\n');
            socket.write('Content-Type: text/html\r\n');
            socket.write('Content-Length: ' + output.length + '\r\n');
            socket.write('\r\n');
            socket.write(output);
            socket.end();
        } else {
            // 웹 프라우저에서 HTTP 라는 문자열이 들어가지 않는 요청은 웹 소켓으로 판단
            // 변수를 선언합니다.
            var opcode = data[0] & 0x0F;
            var payloadLength = data[1];
            var mask = [data[2], data[3], data[4], data[5]];

            // 버퍼를 생성합니다.
            var output = new Buffer(payloadLength);
            for (var i = 6; i < payloadLength + 6; i++) {
                output[i - 6] = data[i] ^ mask[(i - 6) % 4];
            }

            // 출력합니다.
            console.log(output.toString());
        }
    });
}).listen(52273, function () {
    console.log('TCP Server Running at 127.0.0.1:52273');
});
