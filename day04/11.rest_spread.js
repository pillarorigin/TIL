//ES5
const addNumbers_ES5 = (a,b,c,d,e) => {
    const numbers = [a,b,c,d,e];
    return numbers.reduce((acc,num) => acc += num, 0);
};


//ES6
const addNumbers_ES6 = (...numbers) => {
    return numbers.reduce((acc,num) => acc += num, 0);
}
console.log(addNumbers_ES6(1,2,3,4));
const defaultColors = ['red', 'blue', 'green'];
const addColors = ['orange', 'yellow'];
const sumColor = defaultColors.concat(addColors);
console.log(sumColor); //[ 'red', 'blue', 'green', 'orange', 'yellow' ]

//ES6 spread 연산을 통해 sumColors의 결과와 같도록 로직을 만들어보자.
const ES6SumColor = [...defaultColors, ...addColors]; 
//... (스프레드 연산자를 사용해서 배열을 하나로)
console.log(ES6SumColor); //[ 'red', 'blue', 'green', 'orange', 'yellow' ]

const justSumColor = [defaultColors, addColors];
console.log(justSumColor); //[ [ 'red', 'blue', 'green' ], [ 'orange', 'yellow' ] ]



//
function logging(){
    console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 } //key, value로 잡힘
    console.log(...arguments); // 1 2 3 4

    [a,b, ...rest] = arguments; 
    [ , , ...rest2] = arguments; 

    console.log(rest);  //[ 3, 4 ]
    console.log(rest2); //[ 3, 4 ]
}
    
