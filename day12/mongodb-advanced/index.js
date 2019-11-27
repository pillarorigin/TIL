const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wellcome')
    .then(() => { console.log('연결!') })
    .catch((err) => { console.error(err) });

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        // validation required
        required: true,
        minlength: 2,
        maxlength: 255
        // match: /^to/
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        // uppercase: true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                // TODO: empty string exp.
                // async
                setTimeout(() => {
                    callback(v && v.length > 0);
                }, 1000);
            },
            message: 'tag는 반드시 1개 이상 있어야합니다.'
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean,
    students: {
        type: Number,
        //arrow function아니고 일반 익명함수로 접근할 경우 this. 사용 가능. 
        required: function () {
            //조건부 validation
            return this.isPublished;
        },
        min: 10,
        max: 100,
        // getter function : 값(v)을 불러오는(get) 순간에 적용되는 함수
        get: v => Math.round(v),
        // setter function : 값(v)을 저장하는(set) 순간에 적용되는 함수
        set: v => Math.round(v)
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Javascript3',
        category: 'network',
        author: 'Tony',
        tags: ['javascript'],
        isPublished: true,
        students: 10.5
    });

    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        for (field in ex.errors)
            console.log(ex.errors[field].message);
    };
};
// createCourse();

async function getCourse(id) {
    const courses = await Course.find({ _id: id });
    console.log(courses);
    console.log(courses[0].students);
};
getCourse('5dddfd02cb894e0ebc2b8bd5');

async function updateCourse(id) {
    const result2 = await Course.findByIdAndUpdate({ _id: id }, {
        $set: {
            author: 'Tony',
            name: 'Vue.js',
            isPublished: false
        }
    }, { new: true });
    console.log(result2);
};
// updateCourse('');

async function deleteCourse(id) {
    const targetCourse = await Course.findByIdAndRemove(id);
    console.log(targetCourse);
};
// deleteCourse('');