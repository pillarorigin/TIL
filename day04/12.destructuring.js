//객체

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
//Destructuring Object
const {model, year, price} = computer;
console.log(model); //samsung_s

//특정 키값(myModel)이나 index 값으로 원하는 데이터 출력 가능
let {model: myModel, year:myYear, price:myPrice} = computer;
console.log(myYear);

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

//Destructuring 활용 JSON 파싱
let books =
[
        {
            "genre": "소설",
            "price": "100",
            "name": "사람은 무엇으로 사는가?",
            "writer": "톨스토이",
            "publisher": "톨스토이 출판사"
        },
        {
            "genre": "소설",
            "price": "300",
            "name": "홍길동전",
            "writer": "허균",
            "publisher": "허균 출판사"
        },
        {
            "genre": "소설",
            "price": "900",
            "name": "레미제라블",
            "writer": "빅토르 위고",
            "publisher": "빅토르 위고 출판사"
        }
]

// let [genre] = books; //장르만 따로 뽑겠다. 두번째 인덱스 뽑으려면 [,price], 세번재 인덱스 뽑으려면 [,,name]
// let {name, writer} = genre
// console.log(name, writer); //사람은 무엇으로 사는가? 톨스토이


//iterable이란? 
/* 
iterable이라는 말은 '집합' 그 자체보다는 “개별 원소를 반복적으로 셀 수 있는”이라는 뜻
반환된 객체를 “iterator”라고 부른다.
*/

// let [, {name, writer}] = books; //json 두번재 객체[, {}] 에서 writer를 출력
// console.log(writer); //허균

let [, , {writer}] = books; //json 세번재 객체[, {}] 에서 writer를 출력
console.log(writer); //빅토르 위고