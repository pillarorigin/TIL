const mongoose = require('mongoose');

// 2. schema 생성
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
function creatCourse() {
    //  4-1. model을 통해 새로운 인스턴스를 만듬
    const course = new Course({
        //  4-2.
        name: 'JavaScript',
        author: 'Tony',
        tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        isPublished: true,
        student: 10

    });

    // 4-3. instance를 DB에 저장
    const result = await course.save();
    console.log()
}