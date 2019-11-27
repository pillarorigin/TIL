const express = require('express');
const router = express.Router();

// '/api/members -> member router 분리
const members = [
    { id: 1, name: 'Tony', course: 'JavaScript' },
    { id: 2, name: 'Bobby', course: 'Node.js' },
    { id: 3, name: 'John', course: 'Java' },
    { id: 4, name: 'Ganache', course: 'Blockchain' },
]

//validate 중복 제거를 위한 리팩토링 (POST만 리팩토링 PATCH는 리팩토링 하기 전 코드)
function validateMember(member) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        course: Joi.string().required()
    });
    // return schema.Validate(req.body);
    return schema.validate(member);
}

//HTTTP Method (GET / POST / PUT / DELETE)
router.get('/', (req, res) => {
    res.send(members);
})

// '/api/members':url , ()=>{}:수행 동작
// router.get('/api/members', () => {});
router.get('/api/members', (req, res) => {
    res.send({
        john: 'Block Chain',
        Bobby: 'python',
        tony: 'Machine Learning',
        zzula: 'JAVA',
    })
});

// parameter
router.get('/api/members/:id', (req, res) => {
    const member = members.find((member) => {
        //비교연산자 사용시 type 확인 후 사용하기
        return member.id === parseInt(req.params.id)
    });
    // res.send(req.params.id);
    if (!member) res.status(404).send(`${req.params.id}번째 멤버가 없습니다.`)
    res.send(member);
})

router.get('/api/members/:year/:month', (req, res) => {
    res.send(req.params); //url(/:year/:month)뒤의 인자들을 한번에 보낼 수 도 있다.
})

//POST 동사
router.post('/api/members', (req, res) => {
    // //valid (joi 설치 후 주석 처리)
    // if (!req.body.name || req.body.name.length < 3){
    //     res.status(400).send('이름이 너무 짧습니다.');
    //     return;
    // }
    const result = validateMember(req.body);
    console.log(result);

    const member = {
        id: members.length + 1,
        name: req.body.name,
        course: req.body.course
    }
    // const {error, value} = schema.Validate({name: req.body.name})
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    members.push(member);
    res.send(members)
})

//EDIT => UPDATE
//data 수정폼에서 edit 하고 update요청을 보내는 중에 validate과정이 진행되게.

//patch (부분적 요소만 변경)
// router.patch()
router.patch('/api/members/:id', (req, res) => {
    //  1. member is를 통해 탐색 하고 결과를 가져오기
    //(db에서 20개의 data를 받아오고 뿌려줄때는 10개씩 뿌려주는게 더 좋다.)
    //members 배열에서 element(인자들)를 find 할건데 element.id와 사용자에게 요청 받은 params의 id와 일치하는 것을 찾겠다.
    //filter or find 사용 가능
    const member = members.filter(element => {
        return element.id === parseInt(req.params.id)
    });
    console.log(member);
    //  2. data 없으면 data없다고 알려주고
    if (!member) res.send(404).send(`${req.params.id}에 일치하는 멤버가 없습니다.`);

    //  3. data 있으면 validate
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        course: Joi.string().required()
    });
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(404).send(result.error.details[0].message)
        return;
    }

    //  4. validate 하고 update

    //filter()로 검색 시 DB안의 배열 데이터를 수정하려면 배열안의 data가 data주소를 참조하므로 data의 주소에 해당하는 id의 배열을 명시해줘야 함.
    member[0].name = req.body.name;
    member[0].course = req.body.course;

    //find()로 검색 시
    //member.name = req.body.name;
    //member.course = req.body.course;

    res.send(members);
})

//PUT(전체 요소 변경)
// router.put()

// //DELETE
// router.delete()
router.delete('/api/members/:id', (req, res) => {
    const member = members.find(member => member.id === parseInt(req.params.id));
    if (!member) res.status(404).send('일치하는 멤버가 없습니다')
    const index = members.indexOf(member);
    members.splice(index, 1);
    //지워진 애 말고 남은 애 확인
    res.send(members);
})

module.exports = router;