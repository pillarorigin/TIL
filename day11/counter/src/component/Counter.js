import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    // DB등 외부에서 data 가져올 때 사용한다고 알자.
      useEffect(() => {
      }, [])

      return (
        <>
        {/* <div>{}</div> */}
        <button onClick={()=>setCounter(counter + 1 )} >+</button>
        <button onClick={()=>setCounter(counter -1)} >-</button>
        <button onClick={()=>setCounter(0)} >reset</button>
        {counter}
        </>
      )
}

export default Counter;