/*

if문 
if(조건식){ 조건이 참일떄 실행할 문장}

*/

// 한줄일땐 중괄호 안묶어도 됨
if (5 > 3) console.log('5가 3보다 커요');

// 여러줄일 땐 묶을것
if (5 > 3) {
    console.log('5가 3보다 커요')
}


// let number = prompt('숫자입력');
// number = Number(number) //형변환을 해서 다시 집어넣음


/*
it-else

*/

let number = 88;

if (number > 10) {
    console.log('숫자가 10보다 큽니다')
}
else {
    alert('10보다 작거나 같아요')
}


// if ~ else if ~ else
if (number > 10) {
    console.log('10보다 큽니다');
} else if (number === 10) {
    console.log('10입니다.');
}
else {
    console.log('10보다 작습니다');
}



let age = 80;
if (age >= 20) {
    console.log('성인');
}
else if (age >= 17) {
    console.log('고등학생');
}
else if (age >= 14) {
    console.log('중학생');
}
else if (age >= 8) {
    console.log('초등학생');
}
else {
    console.log('유아');
}


/*switch~ease문
    -스위치의 괄호안과 케이스의 조건에서는
    비교식이 들어가지 않고 값 자체가 들어감
    -자바스크립트에선 조건이 많을때 switch를 쓰는게
    근소하게 성능에 유리함
    
    */
let a = 4;
switch (a) {
    case 3:
        console.log('3입니다');
        break;
    case 4:
        console.log('4입니다');
        break;
    // 브레이크가 없으면 다음 케이스도 출력함
    // 조건에 맞는 애만 실행하고 싶으면 브레이크를 쓸것

    // 브레이크를 써주지 않으면 case4를 출력하고 싶을때
    // case5까지 모두 실행됨(스코드{}에서 빠져나가지 못함)
    case 5:
        console.log('5입니다');
        break;
    default:
        console.log('어떤 값인지 모르겠어요');
        break;

}


/*
if문으로
90<=A<=100
80<=B<90
70<=C<80
60<=D<70
F<60
*/

let score = 100

if (score > 100 || score < 0) {
    console.log('잘못된 점수입니다')
}

else if (score >= 90) {
    console.log('A')
}

else if (score >= 80) {
    console.log('B')
}

else if (score >= 70) {
    console.log('C')
}

else if (score >= 60) {
    console.log('D')
}

else {
    console.log('F')
}



// switch로 성적 판별 (0~100까지만)
let score2 = 78;
// console.log(parseInt(score2 / 10))
// 스코어를 10으로 나눈 결과의 몫으로만 판별

switch (parseInt(score2 / 10)) {
    case 10:
    case 9:
        console.log('A입니다');
        break;
    case 8:
        console.log('B입니다');
        break;
    case 7:
        console.log('C입니다');
        break;
    case 6:
        console.log('D입니다');
        break;

    default:
        console.log('F입니다')
}


// 삼항연산자
// 조건식 ? 조건식이 true일떄 : 조건식이 false일때
let num = 5;

if (num % 2 === 1) {
    console.log('홀수');
} else {
    console.log('짝수');
}

num % 2 === 1 ? console.log('홀수') : console.log('짝수');


// 삼항연산자 실습
// 지금이 오전인지 오후인지 콘솔에 출력

let now = new Date().getHours();
// console.log(now)

now < 12 ? console.log('오전') : console.log('오후');


