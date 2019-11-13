//Destructuring and Set 활용
const data = [
    {
        name: "banapresso",
        order: true,
        items: [
            'amaericano', 'HoneyGrapefruit', 'dou'
        ]
    },
    {
        name: 'starbucks',
        order: false,
    },
    {
        name: "facade coffee",
        order: true,
        items: [
            'coldbrew', 'cafemoka', 'milk'
        ]
    }
]

//백틱 안에 태그와 ${변수}
const template = `<div> welcome ${data[0].name}`
console.log(template);

//Tagged Template literals
function template_fn(tags, name, items) {
    // tags는 배열<div>나 string, <h2> 태그 들이 배열로 들어감
    // name은 첫번째 변수 인자 ${data[i].name}
    // items는 두번째 변수 인자 ${data[i].items}
    console.log(tags);
    if (typeof items === "undefined") {
        items = "<span style='color:red'>주문 가능한 상품이 없습니다.</span>"
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

const templateTagged = template_fn`<div> template test ${data[1].name} </div><h2> 주문 가능 항목 </h2> <div>${data[1].items}</div>`;
console.log(templateTagged);

//위 코드를 forEach로 결과값 확인  
data.forEach((v) => {
    const template = template_fn`<div>${v[1].name} </div><h2> 주문 가능 항목 </h2> <div>${v[1].items}</div>`;
    console.log(template);
})