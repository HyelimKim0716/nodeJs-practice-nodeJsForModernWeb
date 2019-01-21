/*
 * 3.4 exports 객체와 모듈
 */

// 모듈 추출
const modules = require('./module.js');

// 모듈 사용
console.log('abs(-273) = %d', modules.abs(-273));
console.log('circleArea(3) = %d', modules.circleArea(3));