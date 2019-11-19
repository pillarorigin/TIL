import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import './Forecast.css';

const Forecast = ({forecast, unit }) => {
    //console.log(forecast, unit);
    const cut = forecast.list.slice(0,10);
    //console.log(cut); //10개씩 slice 된 list 정보
    const getHoursName = h => {
        return h > 12 ? `오후${h - 12}` : `오전${h}`;
    }

    const data = cut.map(e => {
        //element는 return을 해줘야 array 형태로 반환 되므로 꼭 return을 해줘야
        return{
            time : `${getHoursName(new Date(e.dt * 1000).getHours())}`, //string 값으로 나오게
            temperature: Math.round(unit === 'c' ? e.main.temp : e.main.temp * 9 /5 + 32)
        }
    })

    //Todo: 반응형 적용 시키기
    const responsiveWidth = () => {
        const maxWidth = 500;
        const width = window.innerWidth - 10;
        return width > maxWidth ? maxWidth : width;
    }

    return (
        <div className="forecast">
            {/* recharts 쓸 자리 */}
            <LineChart width={responsiveWidth()} height={200} data={data}>
                {/* time과 temperaturesms 위 data에서 return 받은 애들 */}
                <Line type="monotone" dataKey="temperature"/>
                    <XAxis dataKey="time"/>
                    <YAxis domain={["cataMin -1", "dataMax + 1"]}/>
                    <Tooltip />
                    <Legend />
            </LineChart>
        </div>
    )
}

export default Forecast;