//  1. 연결은 index.js에서 붙임.
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

//  2. schema 생성
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type:String,
        default: Date.now
    },
    isPublished: Boolean,
    student: Number
});

//  3. model 생성
const Course = mongoose.model('Course',courseSchema);
//  4. Method 생성
// async function creatCourse() {
//     //  4-1. model을 통해 새로운 인스턴스를 만듬


//     // 4-3. instance를 DB에 저장
//     const result = await course.save();
//     console.log()
// };

//  5. validate 사용
function validateCourse(course) {
    //Joi Schema
    const JoiCourseSchema = Joi.object({
        name: Joi.string(),
        author: Joi.string(),
        tags: Joi.array(),
        date: Joi.date(),
        isPublished: Joi.boolean(),
        student: Joi.number()
    })
    return JoiCourseSchema.validate(course) //validateCourse 함수에서 받은 course를 인자로 받아서 리턴하겠다.
}

module.exports = {
    Course,
    validateCourse
};
    

