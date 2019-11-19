import React, { useState, useEffect } from 'react';

const App = () => {
    //return 되는 순서 중요
    //count로 state를 관리하겠다는 변수 이름. setCount는 count의 값을 변경하는 애 
    const [count, setCount] = useState(0);
    const [number, setNubmer] = useState(1);

    // 콜백 함수 useEffect(()=>{},[]) , componentDidMount와 비슷한 동작.
    useEffect(() => {
        console.log('useEffect 동작');
        document.title = `${count}번 클릭하셨습니다.`
    }, [count, number])


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
        </>
    )
}

export default App;