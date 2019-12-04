import React from 'react';
import ReactDOM from 'react-dom';

// props, state, setState
// 어디에 사용?
// 어떻게 사용?

// 컴포넌트 구조화 > props, state용도 파악!

// 1. Square component
// class Square extends React.Component {
//   // class의 state를 변경하기 위해서는 > setState 를 사용한다!
//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={() => {this.props.onClick()}}
//       >
//         {this.props.value}
//       </button>
//     );
//   };
// };

//함수형으로 작성한 경우 react jsx문법(return)으로작성하면 그 함수형을 react가 component로 인식함 
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

// 2. Board component
class Board extends React.Component {
    // 생성자
    // class가 생성될 때 반드시 필요!
    renderSquare(i) {
        // props
        // JSX
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />;
        // props = { value: this.state.square[i], onClick: () => this.handleClick(i) }
    };
    render() {
        return (
            <div>
                <div className="board-row">
                    {/* <Square /> => JSX */}
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
};

// 3. App component
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true
        }
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        //winner가 있거나 squares안에 값이 있다면 return
        if (calculateWinner(squares) || squares[i]) return;
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        // state 변경하기 위해서는?
        this.setState({
            history: history.concat([{
                squares: squares
            }]), xIsNext: !this.state.xIsNext
        });
    };

    render() {
        const history = this.state.history;
        const current = history[history.length - 1]
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? move + '몇 번째로 이동' : '시작'
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status = '';
        if (winner) {
            status = 'Winner : ' + winner;
        } else {
            status = 'next player :' + (this.state.xIsNext ? 'X' : 'O');
        };

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

ReactDOM.render(<App />, document.getElementById('root'));