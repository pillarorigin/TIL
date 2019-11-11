//ES5
function makeRequest(url, method) {
    if(!method) {
        method = "GET";
    }
    request()
};

//ES6
function makeRequest2(method ='GET'){
    console.log(method) //GET
}
makeRequest2(method='POST');

const sum = (a=1,b=1) => a + b;
console.log(sum());


//from method
function addMark() {
    let newData = [];
    for (let i=0; i<arguments.length; i++){
        newData.push(arguments[i]+"!");
    };
    console.log(newData);   //[ '1!', '2!', '3!', '4!', '5!', '6!', '7!', '8!' ]
}
addMark(1,2,3,4,5,6,7,8)


function fromMethod(){
    let newArray = Array.from(arguments); //newArray를 arguments로 부터 배열을 만든다.
    let newData = newArray.map(function(value){
        return value + "!";
    });
    console.log(newData);   //[ '1!', '2!', '3!', '4!', '5!', '6!', '7!', '8!', '9!' ]
}
fromMethod(1,2,3,4,5,6,7,8,9)