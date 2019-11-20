const express = require('express');
const app = express();

//middle ware call
app.use(express.json())

const members = [
    {
        id: 1,
        name: 'john',
        course: 'Block Chain'
    },
    {
        id: 2,
        name: 'Bobby',
        course: 'python'
    },
    {
        id: 3,
        name: 'tony',
        course: 'Machine Learning',
    },
    {
        id: 4,
        name: 'zzula',
        course: 'JAVA',
    },
]

//HTTTP Method (GET / POST / PUT / DELETE)

//GET 동사
app.get('/', (req, res) => {
    res.send('happy hacking')
});

// '/api/members':url , ()=>{}:수행 동작
// app.get('/api/members', () => {});
app.get('/api/members', (req, res) => {
    res.send({
        john: 'Block Chain',
        Bobby: 'python',
        tony: 'Machine Learning',
        zzula: 'JAVA',

    })
});

// parameter
app.get('/api/members/:id', (req, res) => {
    const members = members.find((member) => {
        //비교연산자 사용시 type 확인 후 사용하기
        return member.id === parseInt(req.params.id)
    });
    // res.send(req.params.id);
    if (!member) res.status(404).send(`${rea.params.id}번째 멤버가 없습니다.`)
    res.send(member);
})

app.get('/api/memvers/:year/:month', (req, res) => {
    res.send(req.params); //url(/:year/:month)뒤의 인자들을 한번에 보낼 수 도 있다.
})

//POST 동사
app.post('/api/members', (req, res) => {
    //valid
    if (!req.body.name || req.body.name.length < 3){
        res.status(400).send('이름이 너무 짧습니다.');
        return;
    }
    const member = {
        id: members.length + 1,
        name: req.body.name,
        course: req.body.course
    }
    members.push(member);
    res.send(members)
})

// //PUT
// app.put()

// //DELETE
// app.delete()

const PORT = process.env.PORT || 3000 //가상환경 지정?
app.listen(PORT, () => { console.log(`${PORT} port start..`) })
