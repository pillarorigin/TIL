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