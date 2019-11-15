import React from 'react';

//Segment component 내보내기 위한 용도
export default function Segment(props){
    const [header, button, any] = props.children;

    //jsx 문법 시 권장 사항(return 시 ()괄호로 묶어 주기)
    return(
        <div className="ui placeholder segment">
            {header}
            {button}
            {any}
        </div>
    );
};