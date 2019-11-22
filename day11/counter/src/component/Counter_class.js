import React, {useState, useEffect} from 'react';

const Counter_class = () => {
    const [counter, setCounter] = useState(0);
    
    const plusCounter = () => {
        setCounter(counter + 1 )
      }

    //   const minusCounter = () => {
    //     const plus = plus - 1
    //     return plus;
    //   }
    //   const Reset = () => {
    //     const plus = 0
    //     return plus;
    //   }

      useEffect(() => {
      }, [])

      return (
        <>
        {/* 함수명 뒤에 ()붙이면 실행되는데 그러면 랜더가 계속 되면서 무한루프됨  */}
        <button onClick={plusCounter} >+</button>
        {/*  */}
        <button onClick={()=>setCounter(counter -1)} >-</button>
        <button onClick={()=>setCounter(0)} >reset</button>
        {counter}
        </>
      )
}

export default Counter_class;