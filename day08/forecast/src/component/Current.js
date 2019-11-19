import React from 'react';
import StateIcon from './Stateicon';
import './Current.css';

const Current = (props) => {
    const { name, dt, weather, main, wind, rain, snow } = props.current;
    const { unit, setUnit } = props; //App.js에서 받아오는 unit, setUnit
    const time = new Date(dt * 1000);
    const day = ['일', '월', '화', '수', '목', '금', '토'];

    //todo : unit으로 c / f 표현
    const changeUnit = () => {
        setUnit(unit === 'c' ? 'f' : 'c');
    }

    return (
        <>
            <section>
                <h2 className="text-muted padding-left"> {name}</h2>
                <article className="text-muted contents">
                    <time> 관측 시각: {`(${day[time.getDay()]}요일)`} {time.toLocaleTimeString()} </time>
                    <p>날씨 상태: {weather[0].description}</p>
                </article>
            </section>

            <section className="grid-contents">
                <article className="weather">
                    <StateIcon icon = {weather[0].icon} />
                    <p className="temparature">
                        {/* 섭씨를 화씨로 */}
                        기온 {Math.round(unit === 'c' ? main.temp : main.temp * 9 / 5 + 32)}
                    </p>
                    <section className="units">
                        {/* 클래스를 조건부로 적용 */}
                        <span
                            className={unit === 'c' ? null : "clickable"} onClick={unit === 'c' ? null : changeUnit}>C</span>
                        <span
                            className={unit === 'f' ? null : "clickable"} onClick={unit === 'f' ? null : changeUnit}>F</span>
                    </section>
                </article>
                <article className="additional-info">
                    <p>
                        강수량
                    </p>
                    <p>
                        적설량
                    </p>
                    <p>
                        습도
                    </p>
                    <p>
                        풍속 : {wind.speed}
                    </p>
                </article>
            </section>
        </>
    )
}

export default Current;