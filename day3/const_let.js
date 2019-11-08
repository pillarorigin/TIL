//  const (상수)
const name = 'name'; //재할당 불가


const obj = {
    name: 'john',
    gender: 'male', //트레일링 콤마 (마지막에 콤마 추가해도 됨.)
}
console.log(obj.name); //john


//배열이나 객체등 다른 타입의 변수를 담는 애들은 상수로 선언해도 내부의 값 변경 가능
obj.name = 'thor';
console.log(obj.name); //thor


//믄자열 연산 가능
const newName = name + 'john' 
console.log(newName); //namejohn


//  let (변수)
let obj_let = 'iron';
console.log(obj_let); //iron