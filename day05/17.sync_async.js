//sync
function first(){
    console.log('first');
}

function second(){
    first();
    console.log('second');
}

function third() {
    second();
    console.log('third');
}

console.log('start');
third();
console.log('end'); //start, first, second, third, end

//async
//익명함수로 실습
console.log('start');

setTimeout(()=> {
    console.log('async first call')
}, 3000);

setTimeout(()=> {
    console.log('async second call')
}, 1000);

console.log('end'); //start, end, async second call, async first call