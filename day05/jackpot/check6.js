const get6 = require('./get6');
const randomNumbers = require('./pick6');

//884회 결과 조회
get6(884)
    .then(data => {
        console.log(data);
        //randomNumbers랑 비교
        if(data.length === randomNumbers.length)
            return '일치';
        else()
    })

console.log(randomNumbers); //위에 data보다 얘가 먼저 출력됨.