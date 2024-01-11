/*

for문
for(변수 선언과 초기값 할당;조건식(어디까지 증가? 감소?);증감식){
    반복할 코드;
}

*/


for (let i = 0; i < 10; i = i + 1) {
    console.log('안녕', 'i')
}

for (let i = 0; i < 10; i += 2) {
    console.log(`안녕하세요 ${i}`);
}
// 1부터 5까지 출력
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 1; i < 6; i++) {
    console.log(i)
}
for (let i = 0; i < 5; i++) {
    console.log(i + 1)
}


//감소
for (let i = 5; i > 0; i--) {
    console.log(i)
}

//1부터 n까지의 덧셈
let n = 11;
let sum1 = 0;
// sum =0+1+2+3+4+...11 11번 반복
console.log('------')
for (let i = 1; i < n + 1; i++) {

    console.log(i)

    // sum1=0+1
    // sum1=0+1+2
    // sum1=0+1+2+3
    // sum1=0+1+2+3...+n

    // sum1 = sum1 + i;
    sum1 += i;

}
console.log(sum1);


/*
배열과 함께 사용하는 for문
*/

let fruits = ['사과', '망고', '오렌지', '망고스틴']
console.log(fruits.length) //4개, 배열의 길이 확인

// fruits[0]
// fruits[1]
// fruits[2]

for (let i = 0; i < fruits.length; i++) {
    console.log('I like', fruits[i])
}


let numsArr = [99, 99, 98, 85, 77];
// 배열의 합구하기 실습
let sum2 = 0;
for (let i = 0; i < numsArr.length; i++) {
    sum2 += numsArr[i]
}

console.log(sum2);


/*
while문

초기화식;
while(조건식){
    조건이 참일 때 실행할 문장
    증감식;
}

*/

let n2 = 1; // while의 초기화식

while (n2 <= 5) { //조건식
    console.log(n2); //실행문
    n2++; //증감식
}

n2 = 10;
while (n2 > 4) {
    console.log(n2);
    n2--;
}


// 1~10까지 짝수만 출력, while문 사용
n2 = 1;
while (n2 <= 10) {
    if (n2 % 2 === 0) {
        console.log(n2)
    }
    n2++
}


// 10부터 1까지 감소, 홀수만 출력
n2 = 10;
while (n2 >= 1) {
    if (n2 % 2 === 1) {
        console.log(n2);
    }
    n2--
}

console.log('------');

let b = 0;
while (true) {
    console.log(b);
    b++;
    if (b > 10) break;
}


console.log('------');

let sum3 = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    // i가 짝수일때 반복하지 않고 다음반복으로 넘어가세요

    sum3 += i;
}

console.log(sum3)

console.log('------');

// let n3 = 0;
// while (confirm('계속 진행할까요?')) {
//     n3++;
//     alert(`${n3}번째 alert 창`)
// }

console.log('------');

// if와 for문
// 10000까지의 숫자중에서 13의 배수면서 숫자를 찾기
// prompt를 이용해서 입력받은 수까지 13의 배수면서 홀수인 숫자를 찾는 프로그램



for (let i = 0; i <= 10000; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i)
    }
}

let num5 = Number(prompt('숫자를 입력하시오'))

for (let i = 0; i <= num5; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i)
    }

}



// 구구단 이중포문
// for (let i = 2; i <= 9; i++) {
//     console.log(`---${i}단---`)
//     for (let j = 1; j <= 9; j++)
//         console.log(`${i}x${j}=${i * j}`)
// }

// 0~100의 숫자중에서 2또는 5의 배수 총합 구하기


let sum4 = 0;
let num = 0;

while (num <= 100) {
    if (num % 2 === 0 || num % 5 === 0) {
        sum4 += num
    }
    num++
}
console.log(sum4);

console.log('------');
