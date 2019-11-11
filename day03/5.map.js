//map (key value 구조) (key값에 객체 저장 가능.)
//Array => set, weakset
//Object -> map, weakmap
//https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/

//ES5
const numbers = [1,2,3];
const doubleN = [];

for (var i=0; i<numbers.length; i++){
    doubleN.push(numbers[i]*2);
}
console.log(doubleN);


//ES6
const doubleN_ES6 = numbers.map(e => e*2);
console.log(doubleN_ES6);

//react에서 특정 data를 map으로 돌려줄때 이렇게 사용
/*
data = [1,2,3,4];
data.map(e => {
    return <h1>e</h1>
})
*/

const images = [
    {height:5,width:1},     //element 하나
    {height:10,width:2},  //element 둘
    {height:50,width:3}   //element 셋
];

//height
const h = images.map(element_h => element_h.height);
console.log(h);
//width
const w = images.map(element_w => element_w.width);
console.log(w);


//fuction obj의 value값을 추출 해보자.
function plunk(arr, key) {
    const result = []; //plunk 함수의 scope에서만 사용 가능한 변수 result 선언
    result.push(arr[key])
    for (let i =0; i<arr.length; i++){
        console.log(arr[i]) //js는 arr에 index가 붙으면 키 값이 된다.
        console.log(arr[i].key) //undefined
        console.log(arr[i][key]) //1, 2, 3 //[키][value]]
        result.push(arr[i][key]);
    }
    return result;
}
const result = plunk(images, 'width'); //key가 width인 값을 result에 담아보자.
console.log(result); // 1,2,3


//WeakMap 추가정보를 담은 객체저장
let wm = new WeakMap();
let myfunction = function(){};
//이 함수가 얼마나 실행했는지를 알려고 할 때.(count)

wm.set(myfunction,0);
console.log(wm);

/*
배열과 Set의 비교
indexOf메서드를 통해 배열에 특정요소가 있는지 비교하는것은 느리다.
배열에서는 해당 요소를 잘라내는 반면 Set객체는 해당요소를 삭제한다.
NaN은 배열에서 indexOf로 찾을 수 없다.
Set은 값의 유일성을 보장하므로 직접 요소의 중복성을 찾을 필요가 없다.
*/