// process 객체에 exit 이벤트 연결
process.on('exit', function (code) {
    console.log("Process exit! code : ", code);
});

// emitted when an exception bubbles all the way back to the event loop.
process.on('uncaughtException', function(err) {
   console.log('Caught exception : ', err);
});

let count = 0;
const exception = function() {
    count += 1;
    if (count > 3) return;

    // exception 강제 발생
    setTimeout(exception, 2000);
    error.error.error();
};

setTimeout(exception, 2000);

// Intentionally cause an exception, but don't catch it
nonexistentFunc();
console.log('This will not run');