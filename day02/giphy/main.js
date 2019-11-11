//const keys = require('./key');
// function includeJS(jsFilePath) {
//     const js = document.createElement("script");
//     js.type = "text/javascript";
//     js.src = jsFilePath;
//     document.body.appendChild(js);
// }
// includeJS('./key.js');


const button = document.querySelector("#js-button");
const inputArea = document.querySelector("#js-input");
const resultArea = document.querySelector("#result-area");

//API 요청 로직
function searchAndPush(keyword){ //우리가 받은 keyword로 검색해서 push 하겠다는 함수
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
    
    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', URL);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', e => {
        const rawData = e.target.response;
        const parsedData = JSON.parse(rawData); //json으로 parsing
        console.log(parsedData);
        pushToDOM(parsedData);
    })
};

//DOM에 그리기
function pushToDOM(parsedData) {
    resultArea.innerHTML = null;
    const dataSet = parsedData.data;
    dataSet.forEach((ImageData, i)=>{
        console.log(ImageData);
        const ImageURL = ImageData.images.fixed_height.url;
        const alt = ImageData.title;
        resultArea.innerHTML += `<img src="${ImageURL}" alt="${alt}" />`
    })
}

button.addEventListener('click', () => {
    searchAndPush(inputArea.value);
});

inputArea.addEventListener('keypress', (e) => {
    if(e.which === 13){
        searchAndPush(inputArea.value);
    }
})