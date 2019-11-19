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
            <header className="header-padding">
                <h1>일기예보</h1>
            </header>
            <main className="container">
                {/* Current가 있을때만 보여야 하므로 조건문 분기 */}
                {current ? <Current /> : <Spinner /> }
                <Forecast />
            </main>
        </>
    )
}

export default App;