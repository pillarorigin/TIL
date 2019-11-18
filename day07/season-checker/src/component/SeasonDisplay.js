import React from 'react';

//위도를 넘겨준다. > props 사용
//SeasonDisplay를 사용해서 위도를 출력해보자.
const SeasonDisplay = (props) => {
    return(
        //jsx template
    <div> SeasonDisplay() 컴포넌트를 분리해서 위도 출력: {props.lat}</div>
    )
}
export default SeasonDisplay;
