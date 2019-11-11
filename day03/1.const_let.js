//  const (상수) - 
const name = 'name'; //재할당 불가


const obj = {
    name: 'john',
    gender: 'male', //trailing comma(마지막에 콤마 추가해도 됨.)
}
console.log(obj.name); //john
//const는 키값으로 접근하는 value의 주소값을 가지고 있으므로 
//배열이나 객체를 const로 선언 후 복사한 경우 문자나 숫자, boolean 타입과 달리 원본에 영향을 미칠 수 있다.


//배열이나 객체등 다른 타입의 변수를 담는 애들은 상수로 선언해도 내부의 값 변경 가능
obj.name = 'thor';
console.log(obj.name); //thor


//믄자열 연산 가능
const newName = name + 'john' 
console.log(newName); //namejohn


//  let (변수) - 변경 될 수 있는 변수
let obj_let = 'iron';
console.log(obj_let); //iron


function fruit() {
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");
    console.log(list);
}
//immmutable array 만들기. 
//(뒤로가기, 앞으로 가기 등 저장해둔 데이터로 보야 줘야 할때.)
const list = ["apple", "orange", "watermelon"];
    list2 = [].concat(list,"banana");
    console.log(list === list2); //false
    // react 사용시 상태 값이 바뀔 때 리덕스를 사용하는데 reducer를 사용하여 새로운 객체를 만들어서 상태값을 바꿔서 리턴하는데 이런 immutable array를 자주 사용.


//결론
/*
 1. const는 기본으로 사용한다. const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능.

 2. 그런데 변경이 될 수 있는 변수는 let을 사용한다. var는 사용하지 않는다.
*/
