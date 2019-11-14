const users = [
    { id: 1, name: 'tony' },
    { id: 2, name: 'thor' },
    { id: 3, name: 'hulk' },
];

// DB에서 user정보 탐색
function getUser(id) {
    let user = null;
    setTimeout(() => {
        user = users.find(user => user.id === id);
    }, 2000);
    return user;
};


function getUserCallback(id, callback) {
    setTimeout(() => {
        const user = users.find(user => user.id === id);
        callback(user);
    }, 2000);
};

function getRepo(githubId, callback) {
    const repos = [
        { githubId: 'tony', commitId: 1 },
        { githubId: 'tony', commitId: 2 },
        { githubId: 'tony', commitId: 3 },
    ];

    setTimeout(() => {
        const repo = repos.find(repo => repo.githubId === githubId);
        callback(repo);
    }, 2000);
};

function getCommit(commitId, callback) {
    const commits = [
        { commitId: 1, contents: 'first commit' },
        { commitId: 2, contents: '[Add] commit' },
        { commitId: 3, contents: '[Modify] commit' },
    ];
    setTimeout(() => {
        //commit을 탐색할 건데 commits안에서 찾을 건데 
        const commit = commits.find(commit => commit.commitId === commitId);
        callback(commit);
    }, 2000);
};

//유저를 찾고
getUserCallback(1, user => {
    console.log('유저를 찾는 중..')
    console.log(user);
    //repo //찾은 유저의 repo에서 
    getRepo(user.name, repo => {
        console.log('repo를 찾는 중..')
        console.log(repo);
        //commit //commit을 찾는 로직
        getCommit(repo.commitId, commit => {
            console.log('commit내용을 찾는 중..')
            console.log(commit);
        })
    })
});