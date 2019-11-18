import React from 'react';

//text를 props로 받아서 "위치 정보 확인중"이라는 text를 동적으로 바꿔주자.
const Spinner = (props) => {
    return (
        <div className="ui active">
            <div className="ui big text loader">
                위치 정보 확인중
                {props.message}
            </div>
        </div>
    )
}

//default (props를 defalut로 설정 가능)
Spinner.defaultProps = {
    message: "사용자 위치 정보를 확인 중입니다."
}

export default Spinner;