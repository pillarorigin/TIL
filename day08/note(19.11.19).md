### 1. 프로젝트 생성
$ npx create-react-app forecast

### 2. 부트 스트랩 설치
$ npm install react-bootstrap bootstrap

### 3. 프로젝트 구조
```
day08
    forecast
        node_modules
        public
            index.html
        src
            component
                App.js (2. )
                App.css (2. )
                Current.js (3. )
                Current.css (3. )
                Forecast.js (4. )
                Forecast.css (4. )
                keys.js
                Spinner.js (5. )
                Spinner.css (5. )
                Stateicon.js (6. )
        index.js (1. 단순히 App을 부르는 애)
        .gitignore
        package-lock.json
        package.json
        README.md
        yarn.lock
```
### 4. 함수형 컴포넌트 추가
    + Current.js
    + Forecast.js
    + Spinner.js
    + Stateicon.js

### 5. React 확장 툴 추가
VS Code ES7 React/Redux/React-Native/JS snippets

### 6. Weather OPEN API
[Weather API] : https://openweathermap.org/api
- By geographic coordinates
    [예제로 사용한 api] : api.openweathermap.org/data/2.5/weather?lat=35&lon=139

### 7. App.js
```react
import React, { useState, useEffect } from 'react';
import Current from './Current';
import Forecast from './Forecast';

const App = () => {
    //return 되는 순서 중요
    //count로 state를 관리하겠다는 변수 이름. setCount는 count의 값을 변경하는 애 
     const [count, setCount] = useState(0);
     const [number, setNubmer] = useState(1);
     console.log(keys)


    // 콜백 함수 useEffect(()=>{},[]) , componentDidMount, componentDidUpdate와 비슷한 동작.
     useEffect(() => {
         console.log('useEffect 동작');
         document.title = `${count}번 클릭하셨습니다.`
     }, [count])


    return (
        <>
            {/* onClick 이벤트에 익명함수 추가 onClick={()=>{}} */}
            <button onClick={() => { setCount(count + 1) }}>
                카운트 업
            </button>

            <button onClick={() => { setCount(count - 1) }}>
                카운트 다운
            </button>

            <h2>
                {count} 번 눌림
            </h2> 

            <header>
                <h1>일기예보</h1>
            </header>
            <main>
                <Current />
                <Forecast />
            </main>
        </>
    )
}

export default App;
```

### 8. App.js 일기 예보에 맞게 수정
```react
// 라이브러리 참조
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

//컴포넌트 
import Current from './Current';
import Forecast from './Forecast';
import keys from './keys';

//css 참조
import './App.css';

const App = () => {
    const APPID = keys.APPID;
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition(resolve, reject);
        })
    }
    const getTemp = async coords => {
        //coords의 data를 디스터링
        console.log(coords); //latitude, longitude 등 의 정보 들어있음
        const { latitude: lat, longitude: lon } = coords; //글자 축약 시 뒤에 작성
        console.log(lat, lon)
        //위도 경도만 뽑아서 url 만듬.
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}`;
        //Axios를 통해 결과 받음.
        const result = await Axios.get(url);
        console.log(result);
        const { data } = result;
        setCurrent(data); //setCurrent 에 data가 담김
    };
    const getHourlyTemp = async coords => { };
    const getAll = async () => {
        //에러 핸들링
        try {
            const { coords } = await getLocation();
            await getTemp(coords);
            await getHourlyTemp(coords);
        } catch (error) {
            alert('위치 정보가 필요합니다.')
        }
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <>
            <header>
                <h1>일기예보</h1>
            </header>
            <main className="container">
                {/* Current가 있을때만 보여야 하므로 조건문 분기 */}
                {current ? <Current /> : <div>로딩중입니다</div> }
                <Forecast />
            </main>
        </>
    )
}

export default App;
```

### 9. setState
state는 업데이트가 비동기로 실행된다.
setState()가 호출 될 때 리액트는 먼저 setState()에 전달한 객체를 현재 상태로 합친다. 그러면 reconciliation(조정)을 시작한다. 새로운 리액트 엘리먼트 트리 (UI의 객체 표현)를 만들고, 새 트리를 이전(old) 트리와 비교하고, setState()에 전달한 객체를 기반으로 변경된 부분을 파악한 다음 DOM을 최종적으로 업데이트한다.

setState()에 전달하는 것은 일반 객체.

"여러 setState() 호출"을 만나면 각 setState() 호출에 전달 된 모든 객체를 추출하여 배치 작업을 수행하고 이를 머지(merge)하여 단일 객체를 형성 한 다음 해당 단일 객체를 사용하여 setState()를 수행

함수형  setState 쓸 때 ...
업데이트는 큐(queue)에 쌓이고 추후에 호출 된 순서대로 실행.

### 10. useState
지금까지 함수형 컴포넌트에서 state를 관리하기 위해서는 클래스형 컴포넌트로 바꿔줘야했습니다. 우선, class 클래스명 extends React.Component를 적어주고 render() 메서드와 함께 들여쓰기를 다시 해줘야 비로소 state 추가가 가능.

이젠 hooks(특별한 함수)를 사용해서 좀 더 깔끔한 코드작성이 가능.
useState의 사용방법에 대해 알아보도록 하겠습니다.
useState는 함수형 컴포넌트에 state를 추가할 수 있도록 도와줍니다.

대괄호를 이용하여 state 변수를 선언
대괄호 왼쪽의 state 변수는 사용하고 싶은 이름으로 선언가능
```
//js의 배열 구조 분해 문법
const [current, setCurrent] = useState(null);
//useState()를 사용하면 current(첫번째)와 setCurrent라는 두번째 값을 사용할 수 있음
```
[hook] : https://ko.reactjs.org/docs/hooks-state.html

### 11. chart 모듈 추가
```
$ npm i recharts
```
[recharts] : http://recharts.org/en-US/

### 12. APP.js 완성형
```react
// 라이브러리 참조
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

//컴포넌트 
import Current from './Current';
import Forecast from './Forecast';
import keys from './keys';
import Spinner from './Spinner';

//css 참조
import './App.css';

const App = () => {
    const APPID = keys.APPID;
    // useState 는 가장 기본적인 Hook. 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줍니다.
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [unit, setUnit] = useState('string'); //string을 인식
    
    const getLocation = () => {
        return new Promise((resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition(resolve, reject);
        })
    }
    const getTemp = async coords => {
        //coords의 data를 디스터링
        //console.log(coords); //latitude, longitude 등 의 정보 들어있음
        const { latitude: lat, longitude: lon } = coords; //글자 축약 시 뒤에 작성
        console.log(lat, lon)
        //위도 경도만 뽑아서 url 만듬.
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric&lang=kr`;
        //Axios를 통해 결과 받음.
        const result = await Axios.get(url);
        console.log(result);
        const { data } = result;
        setCurrent(data); //setCurrent 에 data가 담김
    };
    const getHourlyTemp = async coords => {
        const { latitude: lat, longitude: lon } = coords;
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric&lang=kr`;
        const result = await Axios.get(url);
        console.log(result);
        const { data } = result;
        setForecast(data);
    };
    const getAll = async () => {
        //에러 핸들링
        try {
            const { coords } = await getLocation();
            await getTemp(coords);
            await getHourlyTemp(coords);
        } catch (error) {
            alert('위치 정보가 필요합니다.')
        }
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <>
            <header className="header-padding">
                <h1>일기예보</h1>
            </header>
            <main className="container">
                {/* Current가 있을때만 보여야 하므로 조건문 분기 */}
                {/* Current 컴포넌트 안에 current, unit, setUnit 이라는 3가지 props를 받음 */}
                {
                !current || !forecast ? <Spinner /> 
                    : <> 
                    <Current current={current} unit={unit} setUnit={setUnit} /> 
                    <Forecast forecast={forecast} unit={unit} /> 
                    </>
                }
            </main>
        </>
    )
}

export default App;
```


### Referencr
> https://ko.reactjs.org/docs/hooks-state.html