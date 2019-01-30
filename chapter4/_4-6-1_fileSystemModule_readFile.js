const fs = require('fs');

// 동기적 파일 읽음
const text = fs.readFileSync('readSyncFile.txt', 'utf8');
console.log(text);

// 비동기적으로 파일 읽음
fs.readFile('readAsyncFile.txt', 'utf8', function (err, data) {
    console.log(data);
});