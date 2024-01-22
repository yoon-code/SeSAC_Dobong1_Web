// 구조분해 할당

// 1. 배열의 구조분해 할당

const arr = ['tomato', 'kiwi', 'bananan'];
console.log(arr[2]);
const [to, ki, ba] = arr;
console.log(ki);

const arr2 = ["빨", "주", "노", "초"];
const [red, orange, , green] = arr2;
console.log(red, green);

let x = 'first';
let y = 'second';
[x, y] = [y, x];

console.log(x, y);

let x2 = 'first';
let y2 = 'second';

let temp;
temp = x2;
x2 = y2;
y2 = temp;

// 2. 객체의 구조분해 할당

const obj = {
    title: "제목",
    content: "내용",
    number: 0,
};

console.log(obj.title);

const {
    title: t2, content, number
} = obj;

// console.log(title);

console.log(t2);

// 전개구문 ...

const arr3 = [1, 2, 3, 4, 5];

const arr4 = ['a', 'b', 'c'];

console.log(arr3);
console.log(arr4);

for (let l of arr3) {
    console.log(l);
}

console.log(...arr3);

//[1,2,3,4,5,'a','b','c']

const arr5 = arr3.concat(arr4);
const arr6 = [...arr3, ...arr4];
console.log('-----------------');
console.log(arr5);
console.log(arr6);

const str = 'aliiehigh'

let strToArr = [...str];
let strToArr2 = str.split('');

console.log(strToArr);
console.log(strToArr2);

const me1 = {
    name: "yj",
    height: 157,
    friend: null,
    married: false,
};

const me2 = {
    name: "윤정",
    like: ["눕기", "먹기"],
    greeting: function () {
        console.log(`안녕하세요 제 이름은 ${this.name}이고요
    키는 ${this.height}입니다`)
    },
};

let me = { ...me1, ...me2 }
console.log(me);

// 키값이 같다면 뒤의것이 나오고 나머지는 합쳐짐

console.log('-----------------');


const word1 = 'abc';
const word2 = 'xyz';

//전개 연산자
let word = [...word1, ...word2];
console.log(word);


console.log('-----------------');

// rest

const obj2 = {
    title: "제목",
    content: "내용",
    number: 0,
    key4: 'value4',
    key5: 'value5',
};

cosnt = { title: a, content: b, num: c, ...obj3 } = obj2;
console.log(obj3);
// ...obj3 =나머지는 obj3로 들어감

console.log('-----------------');

function test(...value) {
    const [a, b, ...rest] = value;
    console.log(value);
    // value 자체는 배열 
    console.log(a);
    console.log(b);
    console.log(rest);

    // [ 1, 2, 3, 4, 5, 6 ]
    // 1
    // 2
    // [3, 4, 5, 6]
}

test(1, 2, 3, 4, 5, 6);
console.log('-----------------');


//매개변수가 몇개 들어오든 합산해주는 함수 addNum()
// 0개도 100개도 모두 합쳐주는 함수

function addNum(...rest) {
    // console.log(rest);
    // rest = [1, 2, 3, 4, 5,]


    let sum = 0;
    rest.forEach((el) => {
        sum += el;
    });
    return sum;
}

let result = addNum(1, 2, 3, 4, 5, 6, 7); //28
console.log(result);