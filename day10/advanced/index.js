const express = require('express');

const app = express();
app.use(express.json())

//todo : router /routes/user
const user = require('./routes/user');
//todo : router /routes/article
const article = require('./routes/article')


//base_url/api/article로 접근하면 ? article router 사용하겠다.
app.use('/api/article', article);
// base_url/api/user로 접근하면? > user router 사용 
app.use('/api/user', user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`${PORT}server is starting..`)})