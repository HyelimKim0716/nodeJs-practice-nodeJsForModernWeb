const fs = require('fs');

const asyncData = 'Hello World...! (Async)';
fs.writeFile('writeAsyncFile.txt', asyncData, 'utf8', function (err) {
    console.log('WRITE FILE ASYNC COMPLETE');
});

const syncData = 'Hello World...! (Sync)';
fs.writeFileSync('writeSyncFile.txt', syncData, 'utf8');
console.log('WIRTE FILE SYNC COMPLETE');
