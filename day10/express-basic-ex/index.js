//1. express 모듈 및 미들웨어 설정
const express = require('express');
const app = express();
// const Joi = require('@hapi/joi');
//1.1 미들웨어
app.use(express.json());

//4. DB대용

const users = [
    {id:1, name:'tony', email:'tony@gamil.com', birthday:'10-01-1990'},
    {id:2, name:'bobby', email:'bobby@gamil.com', birthday:'01-01-1989'},
    {id:3, name:'Joi', email:'Joi@gamil.com', birthday:'08-05-1974'}
];

//Joi
//validate(return 값은 error, value 두 가지)에 사용자로부터 입력 받은 값을 넣으면 유효한지 확인


//3. CRUD
//read
app.get('/api/users/:id', (req, res) => {
    const user = users.find((user)=>{
        return user.id === parseInt(req.params.id); 
    })
    if(!user) res.status(404).send(`${req.params.id}님의 정보가 없어요`)
    res.send(user);
});

//create
app.post('/api/users', (req, res)=>{
    const user = {
        id:users.length+1, 
        name:req.body.name, 
        email:req.body.email, 
        birthday:req.body.birthday
    }
    users.push(user);
    res.send(user);
})

//update
app.patch('/api/users/:id', (rea, res)=> {
    const user = users.find(element=> element.id === parseInt(req.params.id));
    if(!user) res.send(404).send(`${req.params.id}님의 정보가 없어요`);
    user.name = req.body.name;
    user.email = req.body.email;
    user.birthday = req.body.birthday;
    res.send(users);
})

//delete
app.delete('api/users/:id', (req, res) => {
    const user = users.find(el => el.is === parseInt(req.params.id));
    if(!user) res.send(404).send(`${req.params.id}님의 정보가 없어요`);
    const index = users.indexOf(user);
    members.splice(index,1);
    res.send(users);
})

//2. 서버 연결
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`${PORT}server starting..`)})