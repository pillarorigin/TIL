//ES5
const products = [
    {name:'apple', type:'fruit'},
    {name:'peer', type:'fruit'},
    {name:'carrot', type:'vegetable'},
    {name:'radish', type:'vegetable'},
];

const fruits = [];

for(var i = 0 ; i<products.length; i++){
    if(products[i].type==='fruit'){
        fruits.push(products[i]); //type이 fruit인 애들 추출
    }
}
console.log(fruits);


//ES6
const vegetable = products.filter(e => {
    return e.type ==="vegetable";
})
console.log(vegetable);

//filter 함수를 사용하여 3보다 크고 7보다 작은 숫자 추출해보자.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const targetN = numbers.filter(number => number>3 && number<7);
console.log(targetN);

//forEach -> array 값 하나씩 탐색 후 if문 사용해서 callback 조건에 맞도록 리턴.
function myReject(arr, callback){
    //반환할 변수 선언
    const result = [];
    //for each 사용 배열 안의 값을 돌리고
    arr.forEach(el => {
        //if 문 사용해서 callback 함수 조건에 맞게 출력
        if(callback(el)) result.push(el);//callback 함수의 결과가 false or true로 반환
    });
    return result;
};
//array(numbers), callback 함수 ( num => num >3)
console.log(myReject(numbers, num => num >3));  //익명 함수(num)가 리턴되는 형식


// 위 로직이랑 같은 결과.
function myReject2 (arr, callback) {
    return arr.filter(e=>callback(e));
}
console.log(myReject2(numbers, num => num >3));