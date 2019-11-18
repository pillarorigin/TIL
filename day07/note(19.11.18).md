### 1. 계절별 시즌 체크할 프로젝트 생성
```react 
npx create-react-app season-checker
```

### 2.  시맨틱 ui 사용하기 위해 cdn 추가
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha256-9mbkOfVho3ZPXfM7W8sV2SndrGDuh7wuyLjtsWeTI1Q=" crossorigin="anonymous" />
```

### 3. 함수현 컴포넌트 vs 클래스형 컴포넌트
단순히 props 만 받아와서 보여주기만 하는 컴포넌트의 경우 함수형 컴포넌트가 간단합니다.
함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은, state 와 LifeCycle 이 존재하지 않습니다.
그래서, 컴포넌트 초기 마운트가 아주 미세하게 빠르고, 메모리 자원을 덜 사용합니다. 
미세한 차이이므로, 컴포넌트를 무수히 많이 렌더링 하게 되는게 아니라면 성능적으로 큰 차이는 없습니다.

    함수형 컴포넌트 장점 : 단순히 props 만 받아와서 보여주기만 하는 경우
    클래스형 컴포넌트 장점: 상태관리 편하고, 재사용 편함

// 함수형 컴포넌트를 클래스형 컴포넌트로 변환해보자 
1. JS class를 사용
2. extends React.Component
3. render() {return (JSX template)}

```react
// (함수형 컴포넌트 상태)
const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {console.log(position)},
        (error) => {console.log(error)}
    );
    return(
        <div>계절 확인</div>
    )
}

// (step 1.) 위 App을 class형 component로 바꿔보자 
class App extends React.Component {
    render(){
        
        return()
    }
}

// (step 2.) 위 App을 class형 component로 바꿔보자 
class App extends React.Component {
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {console.log(position)},
            (error) => {console.log(error)}
        );
        return()
    }
}

// (step 3.) 위 App을 class형 component로 바꿔보자 
class App extends React.Component {
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {console.log(position)},
            (error) => {console.log(error)}
        );
        return(
            <div>위도: </div>
        )
    }
}


// (step 4.) 위 App을 class형 component에 constructor추가 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null
        }
    }
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
            },
            (error) => {console.log(error)}
        );
        return(
            <div>위도: </div>
        )
    }
}
```

### 4. state
state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있습니다.
자신이 받아온 props 값은 this. 키워드를 통하여 조회
```
    constructor(props) {
        super(props);
        //  state와 props 관계 명확하게 구분해서 사용.
        //  state는 component 내의 scope를 가지고
        //  object 형태
        //  component 생성 될 때, 단 1번만 실행됨
        //  setState로만 데이터 수정(접근 가능)
        this.state = {
            lat: null 
            //key: value pair가 보장 되야 함.
        }
    }
```

### 5. props
props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값입니다. 
자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 는 없습니다.


### 6. Life cycle method
1. constructor()
    단 1번 실행 되면 좋은 코드들
2. render()
    {return jsx template}
3. componentDidMount()
    컴포넌트가 화면에 렌더링이 끝나면 실행
4. componentDidUpdate()
    컴포넌트가 updqte가 되고, 리렌더링이 끝나면 실행
5. componentWillUnmount()
   react요소가 아닌 애들을 치울때?? 
...

### 7. 리팩토링 (코드의 구조를 효율적으로 바꾸는 것)
```react
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null 
        }
    }
    componentDidMount() {
        console.log('컴포넌트가 화면에 렌더링이 끝났다')
    }

    componentDidUpdate() {
        console.log('컴포넌트가 업데이트가 되고 리렌더링이 끝났다')
    }
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage:error.message})
        );
        //조건 부 랜더링
        //허용
        if (this.state.lat && !this.state.errorMessage) {
            return(
                <div>위도: {this.state.lat}</div>
            );
        }
        //거절
        if (this.state.lat && this.state.errorMessage) {
            return(
                <div>{this.state.errorMessage}사용자 위치 정보가 필요합니다.</div>
            );
        }
        //허용 , 거절 대기상태
        return(
        <div>
           사용자 위치 정보 수집에 동의해주세요.
        </div>

        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));


```

                    <리팩토링 후>


```react
    //출력 순서
    1. class (App)
        2. constructor 실행
            3. render가 먼저 완료 됬지만 아직 값 없어서
            3. 허용 대기 상태의 return 값 출력
                4. componentDidMount() 실행 
                4. console(렌더끝) 찍히고 window 로직 실행
                4. 허용/차단 대기 중 선택하면 (state 업데이트)
                    5. componentDidUpdate() 실행
                    5. console(리랜더끝) 찍힘

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null 
        }
    }
    componentDidMount() {
        console.log('컴포넌트가 화면에 렌더링이 끝났다')
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage:error.message})
        );
    }
    componentDidUpdate() {
        console.log('컴포넌트가 업데이트가 되고 리렌더링이 끝났다')
    }
    render(){
        //조건 부 랜더링
        //허용
        if (this.state.lat && !this.state.errorMessage) {
            return(
                <div>위도: {this.state.lat}</div>
            );
        }
        //거절
        if (this.state.lat && this.state.errorMessage) {
            return(
                <div>{this.state.errorMessage}사용자 위치 정보가 필요합니다.</div>
            );
        }
        //허용 , 거절 대기상태
        return(
        <div>
           사용자 위치 정보 수집에 동의해주세요.
        </div>

        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
```

### 8. SeasonDisplay를 컴포넌트 추가
```react
import React from 'react';
import ReactDOM from 'react-dom';

//위도를 넘겨준다. > props 사용
//SeasonDisplay를 사용해서 위도를 출력해보자.
const SeasonDisplay = (props) => {
    return(
        //jsx template
    <div> SeasonDisplay() 를 사용해서 위도 출력: {props.lat}</div>
    )
}
export default SeasonDisplay;

class App extends React.Component {
    //constructor에서 하는 일이 state 설정 뿐일 때, 생략 가능
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage :''
        }
    }
    componentDidMount() {
        console.log('컴포넌트가 화면에 렌더링이 끝났다')
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage:error.message})
        );
    }

    componentDidUpdate() {
        console.log('컴포넌트가 업데이트가 되고 리렌더링이 끝났다')
        
    }
    render(){
        //조건 부 랜더링
        //허용
        if (this.state.lat && !this.state.errorMessage) {
            return(
                <div>
                <SeasonDisplay lat={this.state.lat}/>
                위도: {this.state.lat}
                </div>
            );
        }
        //거절
        if (this.state.lat && this.state.errorMessage) {
            return(
                <div>{this.state.errorMessage}사용자 위치 정보가 필요합니다.</div>
            );
        }
        //허용 , 거절 대기상태
        return(
        <div>
           사용자 위치 정보 수집에 동의해주세요.
           
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));


```

### 9. SeasonDisplay를 컴포넌트 분리

