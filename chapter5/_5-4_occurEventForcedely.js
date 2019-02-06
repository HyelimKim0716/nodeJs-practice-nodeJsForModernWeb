process.on('exit', function (code) {
    console.log('Bye bye!');
});

// 프로그램 강제 종료
// process.exit();

// 이벤트 리스너! 강제 실행
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중');

