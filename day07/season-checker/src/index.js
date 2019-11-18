import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './component/SeasonDisplay';
import Spinner from './component/Spinner';

class App extends React.Component {
    //constructor에서 하는 일이 state 설정 뿐일 때, 생략 가능
    constructor(props) {
        super(props);
        //  state와 props 관계 명확하게 구분해서 사용.
        //  state는 component 내의 scope를 가지고
        //  object 형태
        //  component 생성 될 때, 단 1번만 실행됨
        //  setState로만 데이터 수정(접근 가능)
        this.state = {
            lat: null,
            errorMessage :''
            //key: value pair가 보장 되야 함.
        }
    }
    componentDidMount() {
        console.log('컴포넌트가 화면에 렌더링이 끝났다')
        window.navigator.geolocation.getCurrentPosition(
            // 성공 시 인자 한개()=>{}, 실패 시 인자 한개() =>{} 넘길 익명함수 생성
            //state 사용 시 setState() 네에 {} 형태로 수정해야
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage:error.message})
        );
    }

    componentDidUpdate() {
        console.log('컴포넌트가 업데이트가 되고 리렌더링이 끝났다')
        
    }

    conditionalRender() {
        //허용 , 거절 대기상태
        if (this.state.lat && !this.state.errorMessage) {
          return (
            <SeasonDisplay lat={this.state.lat} />
          );
        };
    
        if (!this.state.lat && this.state.errorMessage) {
          return (
            <div>
              {this.state.errorMessage} <br />
              사용자 위치 정보가 필요합니다 ㅠㅠ
            </div>
          );
        };
        return ( <Spinner /> );
      };
    
    render() {
        return(
            <div>
            {this.conditionalRender()}
          </div>
        )
    }
}


// 아이디가 아니어도 root를 찾음
ReactDOM.render(<App />, document.querySelector('#root'));

// (create-react-app으로 프로젝트 진행 시 설치 되는 default임)
// id로 바로 접근 하므로 속도는 얘가 더 빠르다고 함. 
//getElementById('root')
