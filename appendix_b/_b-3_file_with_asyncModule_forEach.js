var async = require('async');

var files = ['_b-3_textFile1.txt', '_b-3_textFile2.txt', '_b-3_textFile3.txt'];

// 파일을 읽습니다.
async.forEach(files, function (item, index) {
    console.log("index: " + index + ", item: " + item);
});
