//1. express 모듈 및 미들웨어 설정
const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
//1.1 미들웨어
app.use(express.json());

//4. DB대용

const users = [
    { id: 1, name: 'tony', email: 'tony@gamil.com', birthday: '10-01-1990' },
    { id: 2, name: 'bobby', email: 'bobby@gamil.com', birthday: '01-01-1989' },
    { id: 3, name: 'Joi', email: 'Joi@gamil.com', birthday: '08-05-1974' }
];

//Joi
//validate(return 값은 error, value 두 가지)에 사용자로부터 입력 받은 값을 넣으면 유효한지 확인
function _validate(input) {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        email: Joi.string().email().min(1).required(),
        birthday: Joi.date().less('01-01-2000')
    });
    return schema.validate(input);
}

//3. CRUD
//db에서 user정보 확인하는 로직
//function style getUser 로직 분리(user가 있는지 확인하는 함수)
function getUser(id) {
    return users.find(user => user.id === parseInt(id))
}

//GET : Read
app.get('/api/users/:id', (req, res) => {
    const user = users.find((user) => {
        return user.id === parseInt(req.params.id);
    })
    if (!user) res.status(404).send(`${req.params.id}님의 정보가 없어요`)
    res.send(user);
});

//create
app.post('/api/users', (req, res) => {
    //validate 부르자
    const { error } = _validate(req.body);
    if (error) {
        res.send(error.details[0].message);
        return;
    }

    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday
    }
    users.push(user);
    res.send(user);
})

//update (patch 부분 수정)
app.patch('/api/users/:id', (req, res) => {
    const user = users.find(element => element.id === parseInt(req.params.id));
    if (!user) res.send(404).send(`${req.params.id}님의 정보가 없어요`);
    user.name = req.body.name;
    user.email = req.body.email;
    user.birthday = req.body.birthday;
    res.send(users);
})

//update (put 전체 수정)
app.put('/api/users/:id', (req, res) => {
    //db에 해당 데이터가 존재하는지 getUser함수를 사용하여 확인
    const user = getUser(req.params.id);
    if (!user) {
        res.send(`${user}님의 정보가 없습니다.`);
        return;
    }
    //validate 부분
    const { error } = _validate(req.body);
    if (error) {
        res.send(error.details[0].message);
        return;
    };
    const { name, email, birthday } = req.body;
    user.name = req.body.name;
    user.email = req.body.email;
    uewr.birthday = req.body.birthday;
    res.send(name, email, birthday);
})


//delete
app.delete('api/users/:id', (req, res) => {
    const user = users.find(el => el.is === parseInt(req.params.id));
    if (!user) res.send(404).send(`${req.params.id}님의 정보가 없어요`);
    //users의 index를 뽑아
    const index = users.indexOf(user);
    members.splice(index, 1);
    res.send(users);
})

//2. 서버 연결
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`${PORT}server starting..`) })