// class: 오브젝트를 만들수 있는 툴!

/*
속성
-만들어진 연도 year
-집의 이름 name
- 창문의 갯수 window

메소드
-건물의 나이 출력 getAge()
-창문의 개수 출력 getWindow()
*/

class House {
    constructor(year, name, window) {
        this.name = name;
        this.year = year;
        this.window = window;
    }

    // 메소드
    getAge() {
        console.log(`${this.name}은 건축한지 ${2024 - this.year}년 됐어요.`);
    }


    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개입니다`);

    }
}


const h1 = {
    name: 'old',
    year: 1789,
    window: 1,
};


const house1 = new House(1789, 'old', 1);

house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, '자이', 10);
house2.getAge();
house2.getWindow();
console.log(house2.name);

console.log('-------상속------');
//  extends 키워드를 사용해서 상속
//  House 클래스의 함수와 속성을 사용할수있음
//  House<<Apartment

class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window); //상속받는 애들

        this.floor = floor;
        this.windowMaker = windowMaker;

    }
    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name}
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
    }

    // 오버라이딩, 덮어쓰기, 재선언
    // 부모클래스 메소드를 이름은 똑같이 쓰고 싶지만
    // 내용을 다르게 만들고 싶을 때 메소드 재선언
    getWindow() {
        console.log(`${this.name}의 창문은
        ${this.windowMaker}에서 만들었고 ${this.window}개입니다`);

    }

    // getAge() <<상속받아서 사용 가능
}
console.log('----------');
const ap1 = new Apartment(2022, 'raemian', 19, 50, 'KCC')
console.log(ap1.getWindow()); //오버라이딩 함수, 메소드 ㅐ정의
console.log('----------');
console.log(ap1.getAptInfo()); //새로운 메소드 정의
ap1.getAge(); //부모 메소드 그대로 상속
console.log(ap1);

console.log('----------');


class Shape {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    getArea() {
        return this.row * this.col

        // 만약 엔터를 치고 싶으면()를 칠것
        // return (
        //     this.row * this.col
        // )



        //저장함 row*col값
        // ;을 쓰거나 줄을 바꾸면 저장과 계산이 별도로 이해됨
    }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); 