import React from 'react';
import './Main.css';
import 'tachyons';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
function Square(props) {
    
  return (
    <button className="square">
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        number={i}
      /> 
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
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
}

class Game extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      target: this.props.test,    
    };

    
  }

  makeMove(i) {
    
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      
    });
    window.location.reload();    
  }

  aiMove(){      
      
       this.makeMove(miniMax(rmNulls(this.state.history[this.state.history.length-1].squares), ai).index);
      
        
    } 


  render() {


  if (!this.state.xIsNext)
    {
        this.aiMove(); 
    }  
     
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
   let command ="test";  
   command = JSON.stringify(this.props.test);

 
     
     if(command !== undefined){    
            if (command.includes("left") && (command.includes("top") || command.includes("th") )){                
                this.makeMove(0);               
            } else if ((command.includes("mid") || command.includes("met") || command.includes("mo")) && (command.includes("top") || command.includes("th") )){                 
                 this.makeMove(1);             
                } else if (command.includes("right") &&(command.includes("top") || command.includes("th") )){                 
                 this.makeMove(2);             
                } else if (command.includes("left") && command.includes("center")){                 
                 this.makeMove(3);             
                }  else if ((command.includes("mid") || command.includes("met") || command.includes("mo")) && command.includes("center")){                 
                 this.makeMove(4);             
                } else if (command.includes("right") && command.includes("center")){                 
                 this.makeMove(5);             
                } else if (command.includes("left") &&  (command.includes("bot") || command.includes("bu") )){                 
                 this.makeMove(6);             
                } else if ((command.includes("mid") || command.includes("met") || command.includes("mo")) && (command.includes("bot") || command.includes("bu") )){                 
                 this.makeMove(7);             
                } else if (command.includes("right") &&(command.includes("bot") || command.includes("bu") )){                 
                 this.makeMove(8);             
                }
             }  

    let status;
    if (winner == "O") {
      status = "You lost";
    } else if(winner == "X"){
      status = "You WON!!!";

    }

    return (
      <div className="game">

        <div className="game-board tc bord-metal dib br3 pa3 ma2 bw2 shadow- mh3">
          <Board
            squares={current.squares}   
          />
        </div>
       {status}
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const human = "X";
const ai = "O";

function getEmpty(squares) {
  return squares.filter(s => s != "O" && s != "X");

}

  function rmNulls(squares){
    let newSquares = [];
      for (let i = 0; i < squares.length; i++)
      {
          if (squares[i] == null){
            newSquares.push(i);
          } else {
            newSquares.push(squares[i]);
          }

      }

      return newSquares;
  }


function findWinner(squares, player) {
 
  if (
 (squares[0] == player && squares[1] == player && squares[2] == player) ||
 (squares[3] == player && squares[4] == player && squares[5] == player) ||
 (squares[6] == player && squares[7] == player && squares[8] == player) ||
 (squares[0] == player && squares[3] == player && squares[6] == player) ||
 (squares[1] == player && squares[4] == player && squares[7] == player) ||
 (squares[2] == player && squares[5] == player && squares[8] == player) ||
 (squares[0] == player && squares[4] == player && squares[8] == player) ||
 (squares[2] == player && squares[4] == player && squares[6] == player)
 ) {
 return true;
 } else {
 return false;
}

}
let fc = 0;
function miniMax(newSquares, player){

fc++;



let availSpots = getEmpty(newSquares);


if (findWinner(newSquares, human)){   
    return {score: -10};
} else if (findWinner(newSquares, ai)){
    return {score: 10};
} else if (availSpots.length === 0) {
  return {score: 0};
}
  let moves = [];

  for (let i = 0; i < availSpots.length; i++){
    let move = {};
        move.index = newSquares[availSpots[i]];  

    newSquares[availSpots[i]] = player;

    if (player == ai) {
      let result = miniMax(newSquares, human);   
      move.score = result.score;
      
    } else {
      let result = miniMax(newSquares, ai);     
      move.score = result.score;    

    }

    newSquares[availSpots[i]] = move.index;
    moves.push(move);   
   } 

   let bestMove;

   if (player === ai) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
   } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++){
        if (moves[i].score < bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
        }
      }
   }
   return moves[bestMove];
}


class Main extends React.Component {

    constructor() {
    super()
    this.state = {}
  }

  sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


startListen(){
     fetch('https://secret-basin-44257.herokuapp.com/api/speech-to-text/token')   

  .then(function(response) {
      return response.text();
  }).then((token) => {
    var stream = recognizeMic({
        token: token,
        objectMode: true, // send objects instead of text
        extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
        format: false // optional - performs basic formatting on the results such as capitals an periods
    });
    stream.on('data', (data) => {
      console.log(data);
      this.setState({
      text: data.alternatives[0].transcript
  }) 
    });
    stream.on('error', function(err) {
        console.log(err);
    });
    document.querySelector('#stop').onclick = stream.stop.bind(stream);
  }).catch(function(error) {
      console.log(error);
  });


}

    render(){
    return(
    <div className="wrapper">        
        <div className="page-header section-dark background-image cont">
        <p className="game-board tc dib br3 pa3 ma2 bw2 shadow-5 para ba bw1"> 
         Try to defeat AI.  <br/>
         Press start button to begin <br/>
         Make move by using microphone with one of following commands: <br/>
         TOP LEFT, TOP MIDDLE, TOP RIGHT <br/>
         CENTER LEFT, CENTER MIDDLE, CENTER RIGHT <br/>
         LEFT BOTTOM, MIDDLE BOTTOM, RIGHT BOTTOM <br/>
         Try to say words slowly and clearly because <br/> IBM watson speech may not always recognize words properly <br/>
        
         </p>
            <div className="filter"></div>

            <div className="content-center">
                <div className="container">

                    <div className="title-brand">
                        <h1 className="presentation-title"></h1>
                    </div>
                      <Game test={this.state.text}/>
                </div>
                <div className="main">
                   <button className="f6 link dim ba ph3 pv2 mb2 dib  button" onClick={this.startListen.bind(this)}>Start</button>
                     <button id="stop" className="f6 link dim ba ph3 pv2 mb2 dib  button">Stop</button>                                        
              <button onClick={() => window.location.reload()} className="f6 link dim ba ph3 pv2 mb2 dib  button">Restart</button>                   
                    
                     </div>                   
                     <div> check {this.state.text} </div>
                    
            </div>           
            </div>
            
        </div>
        );
    }

}
export default Main;

