//ES5
const users = [
    {name:"bobby", age:"20"},
    {name:"hulk", age:"30"},
    {name:"ironman", age:"40"},
    {name:"doctor", age:"50"},
];

let user = null;
for (var i =0; i<users.length; i++ ){
    if(users[i].name === 'ironman') {
        user = users[i];
        break;
    }
}
console.log(user);


//ES6
user_ES6 = users.find((user)=>{
    console.log(user.name === 'hulk'); //bobby false, hulk true
    return user.name === 'hulk'
}) //find 안에는 조건문
console.log(user_ES6); //{ name: 'hulk', age: '30' }


const products = [
    {name:'apple', type:'fruit'},
    {name:'peer', type:'fruit'},
    {name:'carrot', type:'vegetable'},
];
const result = products.find(e => e.name === 'peer');
console.log(result);