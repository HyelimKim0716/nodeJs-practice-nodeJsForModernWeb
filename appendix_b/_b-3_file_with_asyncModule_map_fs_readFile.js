// 모듈을 추출합니다.
var fs = require('fs');
var async = require('async');

// 변수를 선언합니다.
var files = ['_b-3_textFile1.txt', '_b-3_textFile2.txt', '_b-3_textFile3.txt'];

// fs.readFile : 자동으로 각각 파일에 readFile() 메서드를 시행하고 그 결과를 매개변수 result 에 에 출력
async.map(files, fs.readFile, function (error, results) {
    results.forEach(function (result) {
        console.log(result.toString('utf-8'));
    });
});
