// //익명함수의 parameter로 resolve와 reject가 넘어감
// const promise = new Promise((resolve, reject)=>{ 
//     resolve('성공');
//     reject('실패')
// })

// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

//랜덤으로 실패
const getAccount = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const number = Math.floor(Math.random() * 100);
        console.log(number);
        if(number % 2){
            resolve('홀수'); //js는 모듈러 연산 시 0을 어떻게 연산하나??
        }else {
            reject('짝수')
        }
    }, 2000)
})

getAccount
    .then(result => console.log(result))
    .catch(error=>console.log(error));

//callback 함수를 promise로
const users = [
    {id: 1, githubId: 'tony'},
    {id: 2, githubId: 'thor'},
    {id: 3, githubId: 'hulk'},
];
    function getUser(id){
        console.log('유저를 찾고 있습니다')
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const user = users.find(user => user.id === id);
                if(user) resolve(user);
                else reject(new Error('유저가 없습니다.'))
            }, 2000);
        })
    };
    
    function getRepo(githubId) {
        const repos =[
            {githubId:'tony', commitId:1},
            {githubId:'tony', commitId:2},
            {githubId:'tony', commitId:3},
        ];
        //return promise
        setTimeout(()=>{
            const repo = repos.find(repo => repo.name === githubId ) //githubId로 탐색
            return new Promise((resolve, reject)=>{
                if(repo) resolve(repo);
                else reject(new Error('repo가 없습니다.'))
            })
        },2000);
    };
    
    function getCommit(commitId){
        const commits = [
            {commitId:1, contents: 'first commit'},
            {commitId:2, contents: '[Add] commit'},
            {commitId:3, contents: '[Modify] commit'},
        ];
        setTimeout(()=>{
            //commit을 탐색할 건데 commits안에서 찾을 건데 
            const commit = commits.find(commit => commit.commitId === commitId);
            return new Promise((resolve, reject)=>{
                if(commit) resolve(commit);
                else reject(new Error('commit이 없습니다.'))
            })
        }, 2000);
    };

    getUser(1)
        .then(user => {
            console.log(user);
            getRepo(user.githubId);
        })
        .then(repo => { //repo라는 이름으로 체이닝
            console.log(getCommit(repo.commitId));
        })
        .then(commit => {
            console.log(commit);
        })
        .catch(err => console.log(err))