//인자 갯수가 일치
function sum (value, size){
    return value * size;
}
console.log(sum(3, 5)); //15


//두번째 인자값을 주지 않으면 
console.log(sum(3)) //NaN

//default parameter
function sum2(value, size){
    //사이즈가 있으면 size값을 없으면 오른쪽 값이 해석
    size = size || 1;
    return value * size;
}
console.log(sum2(3)); //3

//위 sum2 함수를 줄여 쓰면
function sum2_1(value, size=1){
    return value * size;
}
console.log(sum2_1(3)); //3
console.log(sum2_1(3,6)) //18

function sum2_2(value, size={value:1}){
    return value * size.value;
}
console.log(sum2_2(3,{value:3})); //9
