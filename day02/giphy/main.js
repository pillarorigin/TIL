const keys = require('./key');

const button = document.querySelector("#js-button");
const inputArea = document.querySelector("#js-input");
const resultArea = document.querySelector("#result-area");

//API 요청 로직
function searchAndPush(keyword){ //우리가 받은 keyword로 검색해서 push 하겠다는 함수
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${key.API_KEY}`;

    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', URL);
    GiphyAJAXCall.send();
}