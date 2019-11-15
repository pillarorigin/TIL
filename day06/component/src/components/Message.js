import React from 'react';

//익명함수 fn = () => {}
const Message = (props) => {
    //jsx 문법(return())
    return (
        <div className='ui message'>
            <div className='header'>{props.header}</div>
            <p>{props.body}</p>
        </div>
    );
};

//segment와는 다른 방식으로 export 해보자.
export default Message; 