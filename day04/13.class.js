//ES6 => class 등장.
class Car {
    //생성자 (클래스가 처음 실행 될때, 초기화 작업)
    constructor(option) {
        console.log(option)
        this.name = option.name;
        this.price = option.price;
        this.year = option.year;
    }
    //클래스가 생성되는 정보
    //new Car ({name: "", price:"", year:""});

    //클래스가 사용할 수 있는 fn
    dirve(){
        console.log("Baaam");
    }
};


//Car class의 instance 생성
const BMW = new Car({
    name: "X5",
    price: 55,
    year: 2019
});
const Audi = new Car({
    name: "A7",
    price: 77,
    year: 2018
});

BMW.dirve();    //Baaam
Audi.dirve();   //Baaam


/*

//React
class App extends React.Component {

}

//extends
class를 상속하는 개념

*/
class SuperCar extends Car {
    constructor(option) {
        //상송받으면 super 써줘야
        super(option)   //constructor의 인자로 사용
        console.log("Car 클래스 상속받은 SuperCar:", option); //Car 클리스 상속받은 SuperCar: { name: 'super', price: 100, year: 2020 }
        console.log("super power")
    }
    powerDrive(){
        console.log("super super super super super baam");
    }
};

const BentleyCar = new SuperCar ({
    name: "super",
    price: 100,
    year: 2020
})

console.log(BentleyCar); //SuperCar { name: 'super', price: 100, year: 2020 }
BentleyCar.dirve();     //Baaam
BentleyCar.powerDrive();    //super super super super super baam



//실습
class Monster {
    constructor (option) {
        this.name = option.name;
        this.health = 100; //default는 생성자에서 설정 가능
    };
};

//  1. monster를 사용해서 pikachu 인스턴스를 생성
const pikachu = new Monster ({
    name: "pika",
})

//  2. monster를 상속 받아서 Dinasaur 클래스를 선언
class Dinasaur extends Monster {
    constructor(option){ //밖에서 입력받는 값을 option 인자를 통해 전달.
        super(option);
        console.log("option 인자는 Dinasaur 클래스 안에 인자: ", option); // Dinasaur 클래스 안에 인자:  { name: 'tirano', health: undefined }
    };
    //  3. Dinasaur 클래스 crush(<인스턴스>) : 인스턴스의 health 10을 깍는 메소드
    crush(arg){
        arg.health -= 10;
        console.log("아얏")
    };
};

//  4. Dinasaur의 instance인 tirano를 만들고 pikachu의 체력을 10 깍아주기.
const tirano = new Dinasaur ({
    name: "tirano"
})

//  5. tirano 인스턴스가 crush 함수를 사용하는데 (pikachu)를 인자로 사용
tirano.crush(pikachu); 
console.log(pikachu);   //Monster { name: 'pika', health: 90 }