//  1. module require
const express = require('express');
const router = express.Router();

//  3. exports 한 module require
const { Course } = require('../models/course');

//  2. url 설정
//http://localhost:5000/api/course
//app.use('/api/course', course)
router.get('/', async (req, res, nsxt) => {
    const courses = await Course.find();
    res.send(courses);
    next();

});

router.post('/', async () => {
    
})
// 4. POST 
module.exports=router;