// console.log('test')
// 따옴표 안쓰면 변수로 취급해서 오류남


// 기본형
// 1.string(문자열)
/* 텍스트정보, 숫자, 특수문자도 따옴표안에 있으면 문자열
    따옴표 안에 따옴표가 있다면 "안에 '작은 따옴표'"
    '안에 "큰따옴표"
*/

let myName = "글자";
// js는 ; 안찍어도 됨
let number1 = '128';
console.log(myName)
console.log(number1)


// 2. number 숫자
let number2 = 128;
let opacity = 0.7;
console.log(number2)
// 미세하게 콘솔창 출력 색상이 다름

console.log(opacity)


// NaN (not a number)
// 숫자 아닌거에 연산을 한 것
console.log('문자' - 3);


// 3. booolean
// true, falsel
let checked = true;
let isShow = false;
console.log(checked, isShow)

// 4. undefind
// 값도 없고 타입도 지정되어있지 않은 상태
let undef;
console.log(undef)

let empty = null;
console.log(empty)


// 5. 배열 array
// 여러개의 데이터를 넣을 수 있는 꾸러미, 수넛 o

let fruits = ['orange', 'pineapple', 'strawberry']
console.log(fruits[2])
console.log(fruits[0])

let data = [22, '22', false]
console.log(data[0])
console.log(data[1])


// 2차원 배열, 배열안의 배열
const kor = [
    ['가', '나', '다'],
    ['라', '마', '바'],
    ['사', '아', '자']
]
// 0
// 1
// 2

console.log(kor[0]) //배열 한줄 출력
console.log(kor[0][1]) // '나' 출력



// 아이스크림 출력

const letters = [
    ["사", "스", "자", "크"],
    ["진", "안", "리", "이"],
    ["가", "수", "림", "나"],
    ["아", "으", "차", "운"],
];

console.log(letters[3][0]) //아
console.log(letters[1][3]) //이
console.log(letters[0][1]) //스
console.log(letters[0][3]) //크
console.log(letters[2][2]) //림


const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],

    [
        [7, 8, 9],
        [10, 11, 12]
    ]
]
// 8뽑기
console.log(nums[1][0][1]) //8



// Object {}
// 배열은 순서가 있지만 오브젝트는 키: 밸류 형태
//  데이터 접근시 key 이름을 이용해서 접금
// {키이름: vall, 키이름:vll2}

let cat = {
    name: '나비',
    age: 2,
    isCute: true,
    mew: function () {
        return '냐옹'
    }
}

// 점 표기법
console.log(cat.name)
console.log(cat.age)
console.log(cat.isCute)
console.log(cat.mew())
cat.like = 'tuna'
cat.age = 3
console.log(cat)

// 대괄호 표기법
let dog =
{
    name: 'coco',
    isPoodle: true,
    age: 3,
    sibing: ['max', 'lucy']
}

// 대괄호 표기법은 따옴표 안에 들어가야함
console.log(dog.name)
console.log(dog['name'])
console.log(dog['age'])
console.log(dog['sibing'][1])



// let yoon = {
//     name: '최윤정',
//     age: 29,
// }



// type of 자료형을 알려주는 type of
// null, 불리언= 오브젝트로 콘솔창에 뜸


// 형변환
// 데이터 타입 변환

// prompt로 입력받은 값은 문자로 저장이됨

/*
let mathScore = prompt("수학 점수를 입력 하세요"); //'50'
let engScore = prompt("영어 점수를 입력 하세요"); //'50'
let avg = (mathScore + engScore) / 2; //'5050' /2
console.log(avg);*/

// 명시적 형변환
// 문자 데이터 변환  String();
// 스트링-> 숫자 변환 Number();


/*
let mathScore2 = prompt("수학 점수를 입력 하세요");
let engScore2 = prompt("영어 점수를 입력 하세요");
let mathNumber = Number(mathScore2)
let engNumber = Number(engScore2)
let avg2 = (mathNumber + engNumber) / 2;
console.log(avg2);


console.log(typeof '문자')
console.log(typeof mathScore2)
console.log(typeof mathNumber)
console.log('------')
console.log(typeof true)
console.log(typeof [])
console.log(typeof {})
console.log(typeof NaN)
console.log(typeof null)
console.log(typeof undefined)
*/

// 형변환
// n >> string
console.log('----------------')
let str1 = true; //불리언
let str2 = 123; //넘버
let str3 = null; //널

console.log(String(str1))
console.log(String(str2))
console.log(String(str3))

console.log(typeof (String(str1)))
console.log(typeof (String(str2)))
console.log(typeof (String(str3)))

// >> number
let n1 = true; //1
let n2 = false; //0
let n3 = 123;
let n4 = '123.9';

console.log(Number(n1))
console.log(Number(n2))
console.log(Number(n3))
console.log(Number(n4))


console.log(typeof (Number(n4)))

//소숫점을 버리고 정수형으로 변경
console.log(parseInt(n4))




// 실습


console.log(typeof 10 + "isn't" + typeof '' + 'data type.')
console.log('typeof를 boolean이나 null에사용하면,' +
    typeof null + '결과를얻을수있습니다.')


//실습
let mathScore = '77';
let engScore = '88';

let mathScore2 = Number(mathScore)
let engScore2 = Number(engScore)
let avg2 = (mathScore2 + engScore2) / 2
console.log(avg2);


// var, let, const
// var >쓰이지 않는 추세, var는 재선언이 가능해서 위험함

//var대신 let 사용함, 재선언하면 에러화면이 뜸
//const도 재선언시 오류
// var 사용 x 문제점이있음

// let 재할당이 가능
// let undef; >> 가능

let a = 12;
console.log(a); //12

a = 999;
console.log(a); //999;

// const 재할당 불가, 처음에 값을 넣을것
// const undef; >> 불가능, 선언시 초기화(값 입력) 무조건

const a2 = 12;
console.log(a2); //12

a2 = 999;
// console.log(a2); //불가능



// 변수명, 문자, 숫자, $, _만 사용가능
// 첫글자 숫자 x, 예약어 x
// 예약어 불가

//다른 사람도 알수있게 선언
//상수는 대문자로 선언

// 문자+변수 동시사용
// `문자 ${변수}`


// 순서대로 대입이 됨 그래서
// num++ , 대입후, 증가(값이 들어가고 증가)
// ++num , 증가하고 대입

// = 대입
// == 값만 비교
// === 데이터 타입까지 비교

// or은 트루 확률이 높은걸 앞에 쓰기, 성능에 영향
// and false 확률 높은걸 앞에

