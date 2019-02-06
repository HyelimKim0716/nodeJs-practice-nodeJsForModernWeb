const rint = require('./_5-5_rint');

rint.timer.on('tick', function (code) {
    console.log('이벤트 실행');
});