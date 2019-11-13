//ES5
function add_ES5(a,b){
    return a + b;
};


//ES6
const add_ES6 = (a, b) => {
    return a + b;
};

const add_ES6_2 = (a,b) => a + b;
const square = a => a * a;
console.log(add_ES5(1,2)); //3
console.log(add_ES6(1,2)); //3
console.log(add_ES6_2(1,2)); //3
console.log(square(2)); //4

const obj = {
    name: 'es6',
    sayHi: function(){
        console.log('sayHi를 키로 사용하는 값에 익명함수 넣기 가능')
    },
    sayHi2 () {
        console.log('sayHi2');
    }
};
console.log(obj.name); //es6
obj.sayHi(); //sayHi를 키로 사용하는 값에 익명함수 넣기 가능
obj.sayHi2(); //sayHi2

//setTimeout 사용
// setTimeout(function(){
//     console.log("3초 뒤 set time out arrow");
// }, 3000);

//Arrow 함수 사용 전
let newArr = [1,2,3,4,5].map(function(value, index, obj){
    return value * 2;
});
console.log(newArr); //[2,4,6,8,10]

//Arrow 함수 사용 후
let newArrArrow = [1,2,3,4,5,6].map((v) => {
    return v *3
});
console.log(newArrArrow); //[ 3, 6, 9, 12, 15, 18 ]

//Arrow 함수 사용 후 리턴까지 생략 가능
let newArrArrow2 = [1,2,3,4,5,6,7].map((v) => v * 4);
console.log(newArrArrow2) //[ 4, 8, 12, 16, 20, 24, 28 ]


//Arrow function의 this context
const myObj = {
    runTimeout:()=>{ //함수:()=>{} 이렇게 안할거면 함수 뒤에 .bind(this) 해주어야 됨.
        console.log(this); //여기서 this는 {}
        setTimeout(function(){
            this.printData(); //객체에서 객체 부르기 
            console.log(this === window);
        }, 200);
    },

    printData() {
        console.log("hi codesquad");
    }
}
myObj.runTimeout();