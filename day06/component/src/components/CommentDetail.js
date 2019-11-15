import React from 'react';

//익명함수
const CommentDetail = (props) => {
    //jsx 문법
    return (
        <div>
            {/* 새창에서 뜨게 하기위해 target에 blank */}
            <a href="!#" className="avatar" target='_blank'>
                <img src={props.avatar} alt="avatar" />
            </a>

            <div className="content">

                
            </div>

            <a href="!#" className="author">
                {props.author}
            </a>

            <div className="metadata">
                <span className="data">{props.time}</span>
            </div>
        </div>
    );
};

export default CommentDetail;