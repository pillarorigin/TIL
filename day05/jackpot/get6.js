const request = require('request');
// import request from 'request'

function getLottoData(drwNo) {
    const url =`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}` ;
    return new Promise((resolve, reject)=> {
        request.get(url, (err, response, body) => {
            console.log(body)
        })
    })
}

module.exports = getLottoData(884);  //getLottoData()함수를 밖에서 사용하겠다.
// module.exports = getLottoData();   -> getLottoData()함수를 실행한 결과를 리턴한다는 의미
