//순회 (탐색한 결과를 빠르게 반환받을 때)

//ES5
const computers = [
    { name: 'mac-air', ram: 4 },
    { name: 'mac-pro', ram: 8 },
    { name: 'samsung-s', ram: 16 },
];
let everyComputer = true;
let someComputer = false;
for (var i = 0; i < computers.length; i++) {
    const computer = computers[i];
    if (computer.ram < 10) {
        everyComputer = false;
    }
    if (computer.ram < 10) {
        someComputer = true;
        break;
    }
}

//ES6
everyComputer = computers.every(computers => computers.ram < 10); //computer 는 callBack 함수의 Arg
someComputer = computers.some(computers => computers > 10);

//
const dataSet = [
    { name: 'iron', answer: "hello" },
    { name: 'iron', answer: "hello" },
    { name: 'iron', answer: "hello" }
];
//console.log(dataSet.every(user => user.answer.length > 0)); //true

//실습
const users = [
    { id: 1, submit: true },
    { id: 2, submit: true },
    { id: 3, submit: true },
    { id: 4, submit: false },
]
//submit의 유무
//every : 모두가 submit 했는지
console.log(users.every(user => user.submit === true)); //false
//some : 한명이라도 submit 했는지
console.log(users.some(user => user.submit === true)); //true


//실습 2
function mySome(arr, callBack) {
    const result = false;
    //forEach 사용
    arr.forEach(e1 => {
        //조건문 (전달받은 함수 안에 e1을 전달하고 전달받은 데이터 안에 submit이 true인지 비교)
        if (callBack(e1)) result == true;
    });
    return result;
};
// users는 callback 함수를 넣을 arr
console.log(mySome(users, e => e.submit)); //e.submit이 true이면



function mySome2(arr, callBack) {
    return !arr.every(e => !callBack(e));
}
console.log(mySome2(users, e => e.submit)); //e.submit이 true이면
