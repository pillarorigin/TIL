//  const (상수)
const name = 'name'; //재할당 불가


const obj = {
    name: 'john',
    gender: 'male', //트레일링 콤마 (마지막에 콤마 추가해도 됨.)
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


//  let (변수)
let obj_let = 'iron';
console.log(obj_let); //iron