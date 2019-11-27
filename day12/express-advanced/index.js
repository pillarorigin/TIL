//  1. reauire module
const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan')

//todo : router /routes/user
const user = require('./routes/user');
//todo : router /routes/article
const article = require('./routes/article')
const member = require('./routes/member')
const logger = require('./routes/logger')

const app = express();

//  2. Middleware (Built-In middleware)
app.use(express.json()) //req.body.data
app.use(express.urlencoded({extended:true})); //x-www-form-urlencoded - body-parser
app.use(express.static('public')); // GET ~/<filename.확장자>

// 2.1 3rd
app.use(helmet());
app.use(morgan('tiny')); //tiny, shot 등 옵션 사용 가능.

//  3. Custom Mid (customizing middleware)
// app.use(function(req,res,next){
//     console.log('이동 중...');
//     //여기에 있는 동작들 이후에 next() 미들웨어 불러오게
//     next();
// })
app.use(logger);

//  4. Routes
//base_url/api/article로 접근하면 ? article router 사용하겠다.
app.use('/api/article', article);
// base_url/api/user로 접근하면? > user router 사용 
app.use('/api/user', user);
// base_url/api/member로 접근하면? > member router 사용 
app.use('./api/member', member);

//GET 동사
router.get('/', (req, res) => {
    res.send('happy hacking')
});

//  5. server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`${PORT}server is starting..`)})