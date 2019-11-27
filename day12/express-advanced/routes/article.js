const express = require('express');
const router = express.Router();


const articles = [
    {id:1, author:1, content: '아이디어톤 기획안 제출하기'},
    {id:2, author:3, content: '5시 까지'},
];



router.get('/:id', (req, res) => {
    res.send(articles.find(article => article.id === parseInt(req.params.id)));
});

router.post('/', (req, res) => {
    const newArticle = {
        id:3, author:6, content: '월요일 발표한다는데요'
    }
    articles.push(newArticle);
    res.send(articles)
});

//router export
module.router = router;