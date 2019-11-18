import './SeasonDisplay.css'
import React from 'react';

// object
const seasonConfig = {
    summer: {
      text: '찜통 더위 조심하세요!',
      iconName: 'sun'
    },
    winter: {
      text: '따뜻하게 입으세요!',
      iconName: 'snowflake'
    }
  };


//위도에 따른 계절을 알기 위한 getSeason 함수 생성
const getSeason = (lat, month) => {
    //조건 부 return
    if (month > 3 && month < 9) {
        //삼항 연산자(conditional logic(조건문) true이면 summer, false면 winter)
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    };
};


//위도를 넘겨준다. > props 사용
//SeasonDisplay를 사용해서 위도를 출력해보자.
const SeasonDisplay = (props) => {
    const month = new Date().getMonth();
    const season = getSeason(props.lat, month);
    // const text = season == 'winter' ? '따뜻하게 입으세요' : '찜통 더위 조심하세요'
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    const {text, iconName} = seasonConfig[season];
    return (
        //jsx template
        <div className={`season-display ${season}`} >
            {/* js 문법이라고 명시 하는 { } 안에 백틱(` `)으로 감싸야 react 변수 넣을 수 있음. */}
            <i className={`icon ${iconName}`}></i>
            <div>
                계절 : {season} : {text}
            </div>
            <i className={`icon ${iconName}`}></i>
        </div>
    )
}
export default SeasonDisplay;