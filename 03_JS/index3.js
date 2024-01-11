// var
// 재할당, 재선언 모두 가능
// 재선언: 바람직하지 않음(중복선언)

var name = '홍길동';
var name = '홍길동2';
console.log(name)


//let 
// 재선언 불가능, 재할당 가능
// 최초 선언시 값할당 하지 않아도 됨

let c;
c = 10;; //재할당

// let c; //재선언 불가능
console.log(c)


//const
// 재선언, 재할당 불가능
// 변하지 않는 값을 변수에 저장할 때 사용
// 최초 선언시 반드시 값 할당(초기화)

// const b; 초기화 해야함

const b = 10;
// 선언과 할당이 동시에 이루어져야함

let q1 = 3;
q1 = q1 - 3;
console.log(q1)
// 값이 바뀔거 같ㅇ면 let,

// 비교 연산자
// (참고) = 대입연산자


// 1. 비교연산자 == 값만 비교
console.log('==연산자')
console.log(1 == 1)
console.log(1 == 2)
console.log(1 !== 2)
console.log(1 !== 1)

console.log(1 == '1')
console.log(1 !== '1')


// js 의 이상한 점..
console.log('' == '0') //false
console.log(false == '0') //true
console.log('0' == 0) //true
console.log('' == 0) //true
console.log(undefined == null) //true




// 2. 비교연산자 == 값+타입 비교
console.log('===연산자')
console.log('1' === 1)
console.log(undefined === null)
console.log('' === 0)
console.log(1 === 1)


//3. 크기 비교
console.log(2 > 1)
console.log(1 >= 1)
//=은 항상 뒤에

console.log(2 < 1)
console.log(2 <= 0)


// 산술연산자
console.log('---------산술연산자------')
console.log(1 + 2)
console.log(1 - 2)
console.log(1 * 2)
console.log(7 / 2)
console.log(7 % 2)
console.log(7 ** 2)

// 논리 연산자
console.log('---------논리연산자------')
console.log(!true)
console.log(!!true)
console.log(!!false)

console.log(true && true)
console.log(true && false)
console.log(false && true)

// && and 연산자 false일 확률이 높은 것을 앞으로 배치
console.log(true && true && false && true)
console.log(false && true && true && true)

// || or 연산자 는 true 확률이 높은 조건을 앞쪽에 배치

console.log(true || true)
console.log(true || false) //true
console.log(false || false)//false

console.log(!(2 > 1)) //false

console.log(2 > 1 && -2 < 1) //true

console.log(2 > 1 && -2 < 1 || 2 > 5) //true 하나만 트루여도 트루



//문자와 변수를 같이 쓰는 방법
const str1 = '윤정'
const str2 = '서울'

//윤정이는 서울에 삽니다
console.log(`${str1}이는 ${str2}에 삽니다`)


// + 연산자를 이용(문자열일때는 문자열을 이어줌)
console.log(str1 + '이는' + str2 + '에 삽니다')

// , 사이 사이 띄어쓰기
console.log(str1, '이는', str2, '에 삽니다')

//템플릿 리터럴
console.log(`${str1}이는 ${str2}에 삽니다`)

const str3 = `${str1}이는 ${str2}에 삽니다`
// const str4 = str1, '이는', str2, '에 삽니다' 불가능

const str4 = str1 + '이는' + str2 + '에 삽니다'
console.log(str3)
console.log(str4)

// 함수선언문: 100번라인에 선언해도 1번 라인에 호출해서 사용 가능
// 함수표현식: 코드에 도달해야 생성
// 화살표함수: 함수 표현식의 축약형


