const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/welcome', {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('연결')
}).catch((err)=>{
    console.error(err);
})

/*
String / Number / Date / Boolean / Array / ObjectID / Buffer
*/

//const 스키마명 = new mongoose.스키마
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    //const instance = new MyModel();
    const course = new Course({
        name: 'JavaScript',
        author: 'bobby',
        tags: ['MongoDB','Express','React','Hyperledger'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

createCourse();