import React from 'react';
import Counter from './component/Counter';
import Counter_class from './component/Counter_class'

const App = () => {

  return (
    <>
      <div>
      클래스형
      <Counter_class />
      </div>
      
      <div>
      함수형
      <Counter />
      </div>
      
    </>
  );
}

export default App;
