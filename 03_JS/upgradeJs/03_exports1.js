/*
모듈 만들기 (commonJS 방식)


ecports 라는 키워드 사용해서 내보내기 
한번에 내보내기
*/

const colors = ['#fff', '#ddd', 'green']

const sayHi = () => {
    console.log('hi')
}

function sayName(name) {
    console.log('my name is', name);
    sayHi();
}

// sayName('윤정');


module.exports = {
    colors,
    sayName
}