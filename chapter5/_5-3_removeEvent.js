const onUncaughtException = function (err) {
    console.log("Exception 발생");

    // removeListener : 이벤트가 제거되어 예외 발생. 프로그램 종료
    // process.removeListener('uncaughtException', onUncaughtException);
};

// uncaughtException 이벤트 연결
process.on('uncaughtException', onUncaughtException);
// process.once('uncaughtException', onUncaughtException);

// 강제 exception 발생
const exception = function () {
    setTimeout(exception, 2000);
    error.error.error();
};

exception();
// setTimeout(exception, 2000);
