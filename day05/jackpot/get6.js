const request = require('request');
// import request from 'request'

function getLottoData(drwNo) {
    const url =`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}` ;
    return new Promise((resolve, reject)=> {
        request.get(url, (err, response, body) => {
            // console.log(body)
            const lottoData = JSON.parse(body);
            // console.log(lottoData);
            const realNumber = [];
            let bnusNo = 0;
            //js for of문법
            for(const [key, value] of Object.entries(lottoData)){
                console.log('현재 key-value');
                console.log(key);
                console.log(value);
                console.log('==================')
                if (key.includes('drwt'))realNumber.push(value);
                else if (key === 'bnusNo') bnusNo = value;
                realNumber.sort((a,b)=> a-b);
            };
            // resolve({bnusNo:bnusNo, realNumber:realNumber}); //ES5
            resolve({bnusNo, realNumber});
        })
    })
}

module.exports = getLottoData;  //getLottoData()함수를 밖에서 사용하겠다.
// module.exports = getLottoData();   -> getLottoData()함수를 실행한 결과를 리턴한다는 의미
