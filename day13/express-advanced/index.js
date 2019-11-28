//  1. reauire module
const express = require('express');
const mongoose = require('mongoose');

//  7. routes 호출
const course = require('./models/courses')


//  4. DB connect
const mongoURI = 'mongodb://localhost/express-advanced';
mongoose.connect(mongoURI)
    .then(()=>{
        console.log('mongoose connect..completed');
    })
    .catch(err => console.error(err));

//  2. express 실행
const app = express();

//  5. mongoose connect try (data를 주고 받을 req, res, next인자 필요)
app.use((req,res,next)=>{
    mongoose.connect(mongoURI, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify:true
    }) //연결에 성공시 다음 스텝으로
    .then(()=>{
        console.log('mongoose connect .. success')
        next(); //routes의 url로 이동했다가 로직 수행하고 돌아옴
    })
})


//  6. mongoose disconnect (연결에 실패했을 경우 error를 )
app.use(()=>{
    mongoose.disconnect()
    .then(()=>{
        console.log('mongoose disconnect.. completed');
    })
})

//  8. router 사용
app.use('api/course', course);

//  3. server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`${PORT}server is starting..`)})