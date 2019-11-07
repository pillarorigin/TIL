//const keys = require('./key');
// function includeJS(jsFilePath) {
//     const js = document.createElement("script");
//     js.type = "text/javascript";
//     js.src = jsFilePath;
//     document.body.appendChild(js);
// }
// includeJS('./key.js');



// 여러가지 키워드로 검색된 결과를 1번 저장하고 
const contents = ['car', 'cat', 'wow', 'coin'];
const keyword = contents[Math.floor(Math.random()*contents.length)]

function searchTV(keyword) {
    //API 요청
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', URL);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', e => {
        const rawData = e.target.response;
        const parsedData = JSON.parse(rawData); //json으로 parsing
        console.log(parsedData);
    })
};

// 저장된 값에서 하나씩 꺼내서 보여주기 (랜덤하게)
const tvArea = document.querySelector('#js-tv-area');
function TvArea() {
    //contents의 키워드들을 랜덤하게, 그림 하나만, 3초 릴레이로 보여주기
    tvArea.innerHTML = null;
    //const dataSet = parsedData.data;
    const dataSet = setInterval(function(){
        const ImageURL = ImageData.images.fixed_height.url;
        const alt = ImageData.title;
        tvArea.innerHTML = `<img src="${ImageURL}" alt="${alt}" />`
    }, 3000)
};

document.addEventListener('DOMContentLoaded', searchTV)