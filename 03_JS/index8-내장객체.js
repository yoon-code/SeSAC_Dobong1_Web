/*
Date 객체
*/

// 현재시간, 날짜에 대한 정보를 얻기 위해 사용
// 원하는 값으로 초기화 가능

let now = new Date()
console.log(now) //Wed Jan 10 2024 16:11:37 GMT+0900 (한국 표준시)

// console.log(new Date('날짜문자열')) 
console.log(new Date('September 30, 2000, 13:00:00')) //시간설정가능
console.log(new Date(2002, 3, 4, 1, 2, 10))

console.log(now.getFullYear(), '년')
console.log(now.getMonth(), '월') //월: 0~11
console.log(now.getDate(), '일') //며칠?
console.log(now.getHours(), '시') //시간(0~23)
console.log(now.getMinutes(), '분') //시간(0~59)
console.log(now.getSeconds(), '초') //시간(0~59)
console.log(now.getMilliseconds(), '밀리초') //시간(0~999) 1000이 1초
console.log(now.getDay(), '요일') //요일을 숫자로 가져옴, 0이 일요일, 1이 월요일

/*
Math 객체
*/

console.log(Math.PI); //파이 
console.log(Math.E); //자연로그
console.log(Math.SQRT2); //루트2

// 메소드
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, -5, -7.5))
console.log(Math.max(2, 3, 7, 8, 2, 1, 23, 77, 44, 3))
console.log(Math.ceil(5.155))//올림
console.log(Math.floor(5.155))//내림
console.log(Math.round(5.4))//반올림

console.log(Math.random())//0부터 1사이의 랜덤수 추출

//0<= x <3
console.log(Math.floor(Math.random() * 3))



//0<=x<45
//1<=x<46
console.log(Math.floor(Math.random() * 45) + 1);


//object 관련 객체
const areaNum = {
    Seoul: '02',
    Incheon: '032',
    Busan: '051',
    Ulsan: '052',
    Gwangjo: '062',
    jeju: '064'
}

//각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드

const area = Object.keys(areaNum);
const number = Object.values(areaNum);

console.log(area)
console.log(number)

//실습
//오늘은 주말일까요? 평일일까요?
//요일을 숫자로 가져옴, 0이 일요일, 1이 월요일

switch (now.getDay()) {
    case 0:
    case 6:
        console.log('주말')
    default:
        console.log('평일')
}

//랜덤 숫자 뽑기
//0~10 사이의 랜덤 숫자
//0과 10을 포함
console.log(Math.floor(Math.random() * 10) + 1);