const fs = require('fs');

try {
    const syncData = fs.readFileSync('readSyncFile.txt', 'utf8');
    console.log(syncData);

    const executeExceptionData = fs.readFileSync('readSyncFileTest.txt', 'utf8');
    console.log(executeExceptionData);
} catch (e) {
    console.log(e);
}

try {
    const syncWriteData = 'Write Sync File.\nException Test';
    fs.writeFileSync('writeSyncFileException.txt', syncWriteData, 'utf8');
    console.log('FILE WRITE COMPLETE');
} catch (e) {
    console.log(e);
}


fs.readFile('readSyncFileTest.txt', 'utf8', function (err, data) {
    if (err)
        console.log(err);
    else
        console.log(data);
});

const asyncWriteData = 'Write Async File.\nException Test';
fs.writeFile('writeAsyncFileException.txt', 'utf-8', function (err) {
    if (err)
        console.log(err);
    else
        console.log('FILE WRITE COMPLETE');
});