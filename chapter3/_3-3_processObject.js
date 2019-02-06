/*
 * 3.3 process 객체
 */
process.argv.forEach(function (item, index) {
    // node '_3-3...' --exit 1099 호출!
    console.log(index + ' : ' + typeof (item) + ' : ', item);

    if (item == '--exit') {
        const exitTime = Number(process.argv[index + 1]);

        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});

console.log('-process.env : ', process.env);
console.log('-process.version : ', process.version);
console.log('-process.versions : ', process.versions);
console.log('-process.arch : ', process.arch);
console.log('-process.platform : ', process.platform);
console.log('-process.connected : ', process.connected);
console.log('-process.exeArgv : ', process.exeArgv);
console.log('-process.exitCode : ', process.exitCode);
console.log('-process.mainModule : ', process.mainModule);
console.log('-process.release : ', process.release);
console.log('-process.memoryUsage() : ', process.memoryUsage());
console.log('-process.uptime() : ', process.uptime());
console.log('-process.uptime() : ', process.uptime());
console.log('-process.uptime() : ', process.uptime());