// 모듈을 불러서 사용

// const { sayName } = require('./03_exports1');
// 가지고 오고 싶은 함수/변수만 구조분해할당을 이용해서 가져올수있음

const export1 = require('./03_exports1');
// 한번에 불러오기(객체로 불러옴)

// sayName('엘리')

console.log(export1);
export1.sayName('불러오기')


const { sayHi2, sayHi3 } = require('./03_exports2');
sayHi2();
sayHi3('안녕하세요')