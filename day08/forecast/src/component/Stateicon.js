import React from 'react';

const StateIcon = ( { icon } ) => {
    return (
        // https://openweathermap.org/img/wn/10d@2x.png 이 부분에서 '10d'에 해당 하는 부분만 ${} react 문법으로 바꿔주면 될 것 같은 느낌이 든다.
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
    )
}

export default StateIcon;