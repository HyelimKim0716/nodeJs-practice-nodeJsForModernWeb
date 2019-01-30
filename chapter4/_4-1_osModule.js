// os module 추출
const os = require('os');

console.log(os.hostname());     // 운영체제 호스트 이름
console.log(os.type());         // 운영체제 이름
console.log(os.platform());     // 운영체제 플랫폼
console.log(os.arch());         // 운영체제 아키텍처
console.log(os.release());      // 운영체제 버전
console.log(os.uptime());       // 운영체제 실행된 시간
console.log(os.loadavg());      // 로드 에버리지 정보를 담은 배열
console.log(os.totalmem());     // 시스템 총 메모리
console.log(os.freemem());      // 시스템의 사용 가능한 메모리 리턴
console.log(os.cpus());         // CPU 정보를 담은 객체 리턴
console.log(os.networkInterfaces());    // 네트워크 인터페이스 정보를 담은 배열 리턴
