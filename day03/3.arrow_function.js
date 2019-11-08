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
