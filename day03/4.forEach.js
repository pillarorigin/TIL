//ES5
const colors = ['red', 'yellow', 'green', 'blue'];

for (var i=0; i < colors.length; i++) {
    //console.log(colors[i]); //red yellow green blue
}

//ES6
//colors.forEach(color => console.log(color)); // //red yellow green blue


//ES6 실습 1. forEach2 문을 function forEach2 안에서 돌아가게 구현해보자.
function forEach2(el, callack) {
    if (!Array.isArray(el)) throw new Error('배열이 아닙니다');//들어온 값이 Array가 아니면 error 던지게
    //여기에 구현 //es5 형식의 for문 작성
    for (let i=0; i<el.length; i++){
        callack(el[i]);
    };
};
forEach2(colors, e=> console.log(e));

//
const images = [
    {height:5,width:5}, //element 하나
    {
        height:10,
        width:10
    },  //element 둘
    {
        height:50,
        width:50
    }   //element 셋
];
images.push({height:100,width:100}) ////element 넷
console.log(images); //[element 하나, 둘, 셋, 넷]]

//넓이를 구해서 저장할 변수 area 선언
const area = [];
//forEach문을 사용해서 width * height 값을 area에 저장해보자.
images.forEach(element => {
    //console.log(element);
    area.push(element.height * element.width);
});
console.log(area); //[ 25, 100, 2500, 10000 ]