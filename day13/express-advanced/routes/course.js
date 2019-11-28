//  1. module require
const express = require('express');
const router = express.Router();

//  3. exports 한 module require
const { Course, validateCourse } = require('../models/course');

//  2. url 설정
//http://localhost:5000/api/course
//app.use('/api/course', course)
router.get('/', async (req, res, nsxt) => {
    const courses = await Course.find();
    res.send(courses);
    next();
});

router.post('/', async (req,res,next) => {
    console.log('aaa')
    //  5. validate
    if (validateCourse(req.body).error){ //req.body에 값(course)이 존재한다면 
        res.status(400).send('알맞은 양식이 아닙니다.')
        next();
        return;
    };
    // 4. POST 
    const {name, author, tags, isPublished, student} = req.body;
    const course = new Course({
        //  4-2. dataSet => 6. 위에서 디스트럭처링 했으므로 key value로 적기 가능
        name,author,tags,isPublished,student
    });

    //  7. 인스턴스 db저장
    const result = await course.save();
    console.log(result);
    res.send(result);
    
    next();
});

//pathch
// router.patch();

//delete
// router.delete();


module.exports = router;