/*
* 3.2 console 객체
 */

// log()
console.log('output: %d', 273);
console.log('%d + %d = %d', 273, 52, 273 + 52);

// 특수 문자의 개수와 매개변수의 개수가 다른 경우
console.log('%d + %d = %d', 273, 52, 273 + 52, 52273);
console.log('%d + %d = %d', 273, 52);
console.log('문자열 : %s', 'Hello World...!', '특수 기호와 상관 없음');

console.log('JSON: %j', {name: 'RintIanTta'});

// time()
// 시간 측정 시작
console.time('alpha');

let output = 1;
for (let i = 1; i <= 10; i++) {
    output += i;
}
console.log('Result: ', output);    // , 로 결과값이 어떻게 나오는건지..? %d 없이..?

// 시간 측정 종료
console.timeEnd('alpha');

// 글자 색 변경
console.log('\u001b[31m', 'Hello World...!');