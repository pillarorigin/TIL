const firstName = 'iron';

const secondName = 'man';

const FullName = `My name is ${firstName} ${secondName}`

console.log(FullName);

//string 비교
let str = "hello world : !@#";
let matchStr = "hello";

//startsWith (문자열의 시작이 일치하는지 확인하는 method)
console.log(str.startsWith(matchStr)); //true 

//endsWith (문자열의 끝이 일치하는지 확인하는 method)
console.log(str.endsWith(matchStr)); //false

//includes(문자열에 해당하는 문자열이 있는지 확인하는 method)
console.log("includes method test", str.includes("!@#")); //includse method test true