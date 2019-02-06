// EventEmitter 객체 생성
const custom = new process.EventEmitter();

// 이벤트 연결
custom.on('tick', function (code) {
    console.log('이벤트 실행 : ', code);
});

// 이벤트 강제 발생
custom.emit('tick');