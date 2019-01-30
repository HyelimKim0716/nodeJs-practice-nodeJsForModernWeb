const url = require('url');

// URL 문자열을 URL 객체로 변환해 리턴
const parseObject = url.parse('http://www.naver.com');
console.log(parseObject);