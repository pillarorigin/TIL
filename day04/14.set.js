//set (배열과 유사한 형태)

let mySet = new Set();
console.log(toString.call(mySet)); //[object Set]
//중복 없이 유일한 값을 저장하려고 할 때. 이미 존재하는지 체크할 때 유용.

mySet.add("set");
mySet.add("get");
mySet.add("set");
mySet.add("set");
mySet.add("get");
mySet.add("push");

mySet.forEach(function(value){
    console.log(value); //set, get, push (중복제거됨)
})

console.log(mySet.has("set")); //true ("set이 있는지 확인")

mySet.delete("push");
mySet.forEach(function(value){
    console.log(value); //set, get (중복제거, "push"제거)
})

//WeakSet으로 객체 타입 저장
//참조를 가지고 있는 객체만 저장이 가능, 객체 형태를 중복없이 저장해서 자료구조를 다룰 때.
let arr = [1,2,3,4];
let ws = new WeakSet();
ws.add(arr);
//ws.add(111); //error (Invalid value)
//ws.add("111"); //error (Invalid value)
//ws.add(null); //error (Invalid value)
ws.add(function(){}); //fn이 참조를 하는 객체이므로 출력 가능. 
console.log(ws); //WeakSet { [items unknown] }

//객체가 null이 되거나 필요가 없어지면 가비지 컬렉터로 이동하는데 weakSet에서도 사라짐. 즉, 객체를 메모리에서 지울 수 있음. 
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let WS = new WeakSet();
WS.add(arr);
WS.add(arr2);
WS.add(obj);
console.log(WS);

/*
weakSet
weakset도 weakmap과 마찬가지로 열거를 할 수 없다.
weakset은 객체의 집합이여서 객체만 저장할 수 있다. 특정 type의 값이 저장이 안된다.
weakset은 약한 참조를 가진다. gc의 수거대상이다.
weakset은 사용사례가 제한이 되어있는데, 메모리 누수가 발생되지 않기때문에 안전하게 DOM요소를 키로 저장할 수 있다.
*/
