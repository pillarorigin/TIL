19.11.15 

react cli 맛보기

### 1. npx를 통해서 1회만 실행되도록 프로젝트 생성

```
npx create-react-app component
```

### 2. dependencies에 faker 추가
```
cd component
yarn add faker
```

[faker]: https://www.npmjs.com/package/faker
json fake data https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html

[faker]: https://www.npmjs.com/package/faker
[json fake data] https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html


//index.js 제외하고 다 지우기

### 3. semanticUI
[semanticUI] https://semantic-ui.com/
다운 받지 말고 CDN 갖다 써보자.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha256-9mbkOfVho3ZPXfM7W8sV2SndrGDuh7wuyLjtsWeTI1Q=" crossorigin="anonymous" />

### 4. day06 > component > src > component > js파일 4개 생성

```
$ touch ApprovalCard.js
$ touch CommentDetail.js
$ touch Message.js
$ touch Segment.js
```

#### emmet 설정
ctrl + , or ctrl + shift + p 로 Setting에서 edit json 에 추가
```json
"emmet.includeLanguages": {
        "javascript": "javascriptreact"
    }
```
html 태그 tab으로 자동 완성 기능.
[emmet 설정] https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c

이제 div.content + tab으로 className에 content 자동 완성 가능..^^

div.ui.basic.green.button*2 => 2줄 완성 .. ^^
<div className="ui basic green button"></div>
<div className="ui basic green button"></div>

#### react에 airbnb ESLint 얹기
    airbnb에서 사용하는 js 규칙. (살짝 까다롭지만 적용해서 배우기에는 좋다.)
[ESLint]: https://velog.io/@velopert/eslint-and-prettier-in-react
[ESLint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[Prettier - Code formatter]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode



#### vue와 react 차이
vue는 아래 순서로 작성하는데. 상태관리 측면에서는 react가 좀 더 낫다는 평도 있음.
- templates
- javascript
- css

#### class 와 component 차이
    함수형 컴포넌트는 렌더링된 값들을 고정(유지)시킨다.
        1. state 값을 안정적으로 관리.
        2. 재사용 측면에서 function component가 유리.

    class: 
    class ClassName extends React.Component{
        methodName = () => {
            alert('클래스 사용' + this.props.user)
        }
    }
        
    component: 
    function FunctionName(props) { 
        const methodName = () => {
             alert('component 사용' + props.user)
        }
    }
    
    [class 와 component 차이 출처] : https://overreacted.io/ko/how-are-function-components-different-from-classes/

#### REST vs RESTfulAPI


#### trello.com 사용
- 협업 tool
- project 진행 상황 정리 가능
- 마크다운 문법 사용 가능.
- label 활용 (학습, 개발, issue 등 작성 가능)
- 체크list 
- todo list
[trello]: https://trello.com/