// 모듈을 추출합니다.
var fs = require('fs');
var async = require('async');

// 변수를 선언합니다.
var files = ['_b-3_textFile1.txt', '_b-3_textFile2.txt', '_b-3_textFile3.txt'];

// fs.stat : 파일 상태를 배열로 만들어 줌
async.map(files, fs.stat, function (error, results) {
    console.log(results);
});
