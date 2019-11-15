import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Segment from './components/Segment';
import Message from './components/Message';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

class App extends React.Component {
    //constructor
    //babel
    //state 설정
    state = {
        comments: [],
        number: 0,
        infomation: faker.lorem.paragraph()
    };
    //handleing 할 함수 설정
    handleAddComment = () => {
        //newComment가 작성되면 
        const newComment = {
            author: faker.name.firstName(), //faker가 firstName을 실행
            time: faker.date.recent().toLocaleString(),
            boey: faker.lorem.sentence(),
            avatar: faker.image.avatar()
        };
        // this.state.comment의 data가 comments에 들어감.
        this.setState({ comments: [newComment, ...this.state.comments] });
        //state.comment에 있는 data들을 ... spread 연산자로 뿌려준다.
    };

    //component 재활용 가능
    handlePlus = () => {
        //single 페이지 구성시 data 변화를 주었을 경우 즉시 real time으로 반영되지 않지만 
        //react는 setState가 감지하고 있다가 변화가 있으면 render하지않고 화면을 새로 뿌려주는 역할
        this.setState({ number: this.state.number + 1 })
    }
    handleMinus = () => {
        this.setState({ number: this.state.number - 1 })
    }
    handleReset = () => {
        const number = 0
        this.setState({ number: 0 })
        // this.setState({ number: this.state.number = 0})
    }

    render() {
        return (
            <>
                <span>{this.state.number}</span>
                <button onClick={this.handlePlus}> + </button>
                <button onClick={this.handleMinus}> - </button>
                <button onClick={this.handleReset}> reset </button>

                <Segment>
                    <div className="ui icon header">
                        <i className="pdf file outline icon">
                            No Document
                        </i>
                    </div>
                    <div className="ui primary button">Add document</div>
                    <button className="ui primary button">any button</button>
                </Segment>

                <Segment>
                    <h4 className="ui header">For your information</h4>
                    <p>{this.state.infomation}</p>
                </Segment>

                <Message header="회원 약관 변경" body="약관이 변경 되었습니다." />

                <div className="ui container comments">
                    <button className="ui primary button" onClick={this.handleAddComment}> 댓글 작성 </button>
                    <ApprovalCard>
                        <h4> 리액트가 재미있어요. </h4>
                    </ApprovalCard>
                    {/* comment에 faker data 정보가 있고, 각 data마다 index(i)가 필요 */}
                    {this.state.comments.map((comment,i) => {
                        console.log(i)
                        return (
                            // comment의 key값을 넣어서 식별
                            <ApprovalCard key={i}>
                                <CommentDetail {...comment} />
                            </ApprovalCard>
                        );
                    })}
                </div>
            </>
            // <>
            // {/* 빈 태그 넣어 주기만 해도 바벨이 인식? 어떻게?  */}
            // </>
        );
    };

};

ReactDOM.render(<App />, document.querySelector("#root"));
