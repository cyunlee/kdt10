//클래스
//: 객체 생성 템플릿 -> 객체를 만들기 위해 사용

//집 이라는 클래스가 있다고 쳤을 때,
/**
 * 속성:
 * 만들어진 년도, 집의 이름, 창문 갯수 등등
 * 메소드: 
 * 창문 갯수 출력하는 메소드, 집의 이름 출력하는 메소드 등 
 */

//클래스 정의
class House {
    // 생성자 함수
    // : 클래스를 이용해 객체를 생성할 때마다 속성을 초기화 
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }
    // 메소드 1 : 집의 나이를 출력
    getAge() {
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 됐다!`);
    }

    // 메소드 2 : 창문 갯수 출력
    getWindow() {
        console.log(`${this.name}의 창문 갯수는 ${this.window}개다!`)
    }

}

// 클래스(들)를 이용해서 객체를 만들기
const house1 = new House(2010, '아파트', 10);
console.log('house1 > ', house1);
console.log(house1.name);
house1.getAge();

const house2 = new House(2012, '빌라', 20);
house2.getAge();


class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());

//직사각형 클래스 만들기 
class Rectangle extends Shape {
    constructor(width, height){
        super(width, height);
    }

    getArea() {
        return this.width*this.height;
    }

    getSqrt() {
        return Math.sqrt(this.width*this.height)
    }
}

//삼각형 클래스 만들기
class Triangle extends Shape {
    constructor(width, height){
        super(width, height);
    }
    getArea(){
        return 0.5*this.width*this.height;
    }
}

//원 클래스 만들기
class Circle extends Shape {
    constructor(width, height, radius){
        super(width, height);
        this.radius=radius;
    }

    getArea(){
        return 3.14*this.radius*this.radius;
    }
}

const rect = new Rectangle(3, 4);
const tri = new Triangle(3, 4);
const cir = new Circle(3, 4, 5);

console.log(rect.getArea());
console.log(tri.getArea());
console.log(cir.getArea());


//클래스 상속
//부모 클래스 : House
//자식 클래스 : Apartment
class Apartment extends House {
    constructor(year, name, window, floor){
        //부모 객체에서 상속 받음 => 상속받은 부모 클래스의 생성자를 호출
        super(year, name, window);
        this.floor = floor;
    }

    getFloor() {
        return `${this.year}년에 지어진 ${this.name}아파트의 총 층수는 ${this.floor}`;
    }

    // 오버라이딩
    // 부모 클래스에 정의되어 있는 메소드를 이름은 동일하게 쓰되, 내용은 다르게
    getAge(){
        console.log(`${2023-this.year}년 된 아파트는 총 ${this.floor}층이다`);
    }
}

const apt1 = new Apartment(2022, '레미안', 100, 30);
console.log(apt1);
apt1.getAge();
console.log(apt1.getFloor());

