import React from 'react';
//react-bootstarp의 Spinner를 Loader라는 이름으로 바꿔서 사용
import {Spinner as Loader} from 'react-bootstrap';

const Spinner = () => {
    return(
      <Loader animation="border"></Loader>
    )
}

export default Spinner;