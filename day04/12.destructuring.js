//ES5
const computer = {
    model: "samsung_s",
    year: 2019,
    price: 150
};
// const model = computer.model;
// const year = computer.year;
// const price = computer.price;

//ES6
//비구조화 할당 가능 , 이름을 똑같이 적어줘야
const {model, year, price} = computer;
console.log(model); //samsung_s



//트레일닝 콤마는 js 배열에서만 가능, json 타입에서는 사용시 주의.
const laptops= [
    {
        model: "samsung_s",
        year: 2019,
        price: 150
    },
    {
        model: "mac",
        year: 2018,
        price: 170
    },
];

const result1 = laptops.map((el)=>{
    return `<h1>${el.model}</h1>`
})
const result2 = laptops.map((model)=>{
    return `<h1>${model}</h1>`
})
console.log(result1); //[ '<h1>samsung_s</h1>', '<h1>mac</h1>' ]
console.log(result2);   //[ '<h1>[object Object]</h1>', '<h1>[object Object]</h1>' ]