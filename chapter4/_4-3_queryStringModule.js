const url = require('url');
const queryString = require('querystring');

const parseObject = url.parse('www.daum.net');
console.log(queryString.parse(parseObject.query));
