const customers = [
    { id: 1, name: 'bobby', isGold: true, email: 'pillarorigin@naaver.com' },
    { id: 2, name: 'thor', isGold: true, email: 'thor@gmail.com' },
    { id: 3, name: 'tony', isGold: true, email: 'ironman@gmail.com' },
];

//1. customer를 찾고
function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const customer = customers.find(customer => customer.id === id)
            if (customer) resolve(customer)
            else reject(new Error('일치하는 사용자가 없습니다.'))
        }, 2000)
    })
};

// https://firebase.google.com/docs/web/setup

//2. gold인지 확인하고
function getGold(isGold) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGold === true) resolve(true)
            else reject(new Error('골드 회원이 아닙니다'));
        })
    }, 2000)
}

//3. 맞으면, email을 console에 띄우기.
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sending email...');
        })
    }, 2000)
}

//(익명함수)(); 단 1번 실행됩니다.
//익명함수의 결과가 바로 나옴 
// ((){})();
(async function () {
    const customer = await getCustomer(1);
    const isGold = await getGold(customer.isGold);
    if (customer.isGold) console.log(await sendEmail());
})();


