//문자열에서 사용가능한 속성/메소드

/*
length
toUpperCase, trim, indexOf,
slice, replacs, repace, repaceAll, repeat, slice
*/

let str1 = "Strawbert Moon";
let str2 = "    Strawbert Moon  ";

//문자열 인덱싱
console.log(str1[5]);
console.log(str1[5] + str1[0] + str1[8]);

// length 공백까지 문자열 길이에 포함
console.log('str1 문자열 길이', str1.length)
console.log('str2 문자열 길이', str2.length)

let msg = 'Happy Birthday~';
let userId = '     user123    ';

console.log(msg.toLowerCase())
console.log(msg.toUpperCase())
console.log(str2.trim().length)
console.log(userId.trim())

let mango = 'applemango'
//indexOf
console.log(mango.indexOf('apple')) //0
console.log(mango.indexOf('mango')) //5
console.log(mango.indexOf('e')) //4
console.log(mango.indexOf('x')) //없는 값은 -1
//문자열에 포함되지 않은 문자열이 매개변수로 들어가면 -1 반환

//slice
console.log(mango.slice(5)) //mango
console.log(mango.slice(3, 6)) //lem
console.log(mango.slice(-1)) //o
console.log(mango.slice(-4)) //ango
console.log(mango)//실제값은 변하지 않음


let msg2 = 'Wow~ It is so amazing!!!'
console.log(msg2.replace("Wow", "Hey"))
console.log(msg2.replaceAll('o', 'O'))
//그냥 리플레이스면 처음 o만 변경이 됨

let date = '2024.1.10';
//2024-1-10
console.log(date.replaceAll(".", "-"))

console.log("abc".repeat(10));

console.log(date.split('.'));
console.log(date.split(''));

// 배열 관련 메소드
/*
length(속성)
push
pop
unshift
shift
indexOf
join
reverse

-includes, map, gorEach,find, filter
-for~of(함수 아님)
*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'puppy', 'rabbit', 'hamster'];

arr1[5] = 6;
arr1[7] = 7;

console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
// push 추가하기
arr1.push(6);
arr1.push(7);
arr1.push(10);
// pop 빼기
arr1.pop();
arr1.pop();
arr1.pop()

console.log(arr1);


// unshift 맨 앞에 추가
arr2.unshift("cat")
console.log(arr2);

// shift 맨 앞에 삭제
arr2.shift()
console.log(arr2);

// includes(매개변수 한개-배열의 요소가 들어감)
// 매개변수로 들어간 요소가 배열에 있으면 true이고
//없으면 false임

console.log(arr2.includes('cat'))
// 캣이 있는가? 없음 -> false

console.log(arr2.includes('quakka'))
// 쿼카가 있는가? 있음 -> true


// indexOf 문자열의 indexOf와 동일
// 몇번째 인덱스인가? 인덱스값 반환
console.log(arr2.indexOf('quakka')) //0

// reverse 배열의 순서를 뒤집어줌
// 실제 배열이 변경됩니다
arr1.reverse();
console.log(arr1)


// join 문자열의 split 메소드와 반대
// 배열을 문자열로 변경시켜줌

str1 = str1.split('')
console.log(str1)

str1 = str1.join('+')
// 요소 사이사이에 +가 들어감
console.log(str1)


// 반복문 for of, forEach


let arr3 = [5, 6, 7, 8, 9];
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
}


for (let number of arr3) {
    console.log(number)
}

for (let alphabet of alphabets) {
    console.log(alphabet)
}


// forEach, 단순반복

/*
배열.forEach(function(element[,index,array]){

})
*/

arr3.forEach(function (element, index, arr) {
    console.log(element, index, arr)
});


//filter
// return 이후 조건을 만족하는 요소들을 모아서 배열로 전환

// 함수표현식
let six = arr2.filter(function (word) {
    return word.length === 6;
})

// 화살표함수 &return있는 ver
let six2 = arr2.filter((word) => {
    return word.length === 6;
})

// 화살표함수& return없는 ver, 중괄호도 없음
let six3 = arr2.filter((word) => word.length === 6)
//return을 포함함

console.log(arr2)
console.log(six)
console.log(six2)
console.log(six3)

//map
//배열 내의 모든 요소에 대해 함수 호출한
// 결과를 모아서 새로운 배열로 반환

let arr4 = [1, 2, 3, 4, 5];
let multArr = arr4.map(function (element) {
    return element * 3;
})

console.log(multArr);


// find
//배열에서 특정조건을 만족하는 첫번째 요소 값을 반환

let findResult = multArr.find(function (element) {
    return element > 10;
})

console.log(findResult)



console.log('-------')

// (실습) 배열과 반복문 실습

let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(i);
}
console.log(arr);

// for

let sumFor = 0;
for (let i = 1; i <= 100; i++) {
    sumFor += i;
}
console.log(sumFor);


//for of
let sumForOf = 0;
for (let num of arr) {
    sumForOf += num;
}
console.log(sumForOf);

//[].forEach()
let sumForEach = 0;
arr.forEach(num => {
    sumForEach += num;
});
console.log(sumForEach);



// console.log('-------')
// let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
// let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

// let same = fruits1.filter(function (fruit) {
//     return fruits2.includes(fruit)
// })
// console.log(same);


// let diff = fruits1.filter(function (fruit) {
//     return !fruits2.includes(fruit)
// })

// console.log(diff);


