//ES5

const numbers = [1, 2, 3];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
// console.log(sum); //6


//ES6
//  #덧셈
sum = numbers.reduce((acc, number) => {  //callback 함수를 익명함수로 넣고
    // console.log(acc) //0
    return acc + number;
}, 0); //초기값이 0
// console.log(sum);

//  #곱셈
let multiply = numbers.reduce((mul, num) => {
    // console.log(mul);
    return mul * num;
}, 10); // 초기값을 주면 초기값 * 인자1 * 인자2 * 인자 3의 값이 리턴(60). //초기값 안주면 배열의 첫번째 인자가 초기값이 됨(6)
console.log(multiply);

//  #문자열도 가능해요
const stringSet = ['apple', 'is', ' good'];
console.log(stringSet.reduce((acc, str) => acc + str), ''); //appleis good

//  # 배열.map((요소, 인덱스, 배열) => { return 요소 });
const dNumbers1 = numbers.map(e => e * 2);
console.log(dNumbers1); // [2, 4, 6]


//  #reduce
//dNumbers1과 결과가 같게 만들어 보자.
//배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
const dNumbers2 = numbers.reduce((sum, current_value) => {
    console.log(sum); //[]
    sum.push(current_value * 2)
    return sum //[2] 결과값 나오고, 다시 돌 때 [2,4] 
}, []); //초기값([])이 재귀적순서로 동작.
console.log(dNumbers2); //[2,4,6] //return된 sum 값이 다음 sum에 인자값으로 사용되면서 누적.


//알고리즘 () 검사하는 함수 만들기(stack 자료구조)
/*
    1. String의 한 char씩 스킨한다
    2. OPEN_괄호 ‘(‘ 을 만나면 스택에 push한다
    3. CLOSE_괄호 ‘)’를 만나면 스택에서 pop을 한다
    4. 스택에 아무것도 남아 있지 않으면, valid한 괄호인것으로 판단할 수 있다.
*/
function checkParens(str) {
    let result = true; //결과의 초기값 true;
    let parens_array = []; //괄호만 넣을 빈 배열

    for (i = 0; i < str.length; i++) {
        //문자열 str 의 '(' 만 추출해서 배열에 담는다.
        if (str[i] == "(") {
            parens_array.push(str[i]);
        }
    }
}

//() 검사하는 함수 만들기 다른 방법 // .reduce((초기값)=>{익명함수},0초기값)
function checkParens2(str) {
    return str.split('').reduce((acc, char) => {
        if (acc < 0) {
            return acc;
        } else if (char === '(') {
            ++acc;
        } else {
            --acc;
        }
        return acc;
    }, 0);
};
console.log(checkParens2(')(')); //-1


// reduce를 사용하여 앉아 있는 사람의 수를 count 해보자.
const users = [
    { id: 1, type: 'sitting' },
    { id: 2, type: 'sitting' },
    { id: 3, type: 'standing' },
    { id: 4, type: 'sitting' },
    { id: 5, type: 'standing' },
]
// const key = type;
// const sitting = users.reduce((arr, sum) => {
//     console.log(arr);
//     users.forEach(element => {
//         arr.push(element)
//         console.log(element)
//     });
// }, 0);


// reduce를 사용하여 중복된 숫자를 제외하고 배열을 출력. 
const samples = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5]
function unique(arr) {
    return arr.reduce((acc, element) => { //재귀동작 취하는데 초기값은 [] 빈배열이고 , ervery로 검사.
        console.log(acc);
        if (acc.every(e => e != element)) {
            acc.push(element);
        }; //모든 element가 해당하면
        return acc;
        //every의 ()=>{} 조건문이 true인지 false인지에 따라 로직 변경
    }, [])
}
console.log(unique(samples));

//  # set 메서드 이용
const check = new Set(samples); //집합
console.log(check);
