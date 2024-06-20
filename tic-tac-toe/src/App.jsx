import { useState }  from "react"

function Square({value, onHandleClick}){
 
  return (
    <button className='sqaure' onClick={onHandleClick} > {value} </button>
  )
}
export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [chance, setChance] = useState(true)

  function handleClick(i){
    if(calculateWinner(squares) || squares[i])
      return;
    const nextSquare = squares.slice()
    if(chance)
      nextSquare[i] = 'X'
    else
      nextSquare[i] = 'O'
    setChance(!chance)
    setSquares(nextSquare)

  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    if(game(squares))
      status = 'Game ended' 
    else
      status = 'Next player: ' + (chance ? 'X' : 'O');
  }
  return (
    <>
      <div className="winner">{status}</div>
      <div className='board-row'>
      <Square value ={squares[0]} onHandleClick = {() => handleClick(0)}/>
      <Square value ={squares[1]} onHandleClick = {() => handleClick(1)}/>
      <Square value ={squares[2]} onHandleClick = {() => handleClick(2)}/>
      </div>
      <div className='board-row'>
      <Square value ={squares[3]} onHandleClick = {() => handleClick(3)}/>
      <Square value ={squares[4]} onHandleClick = {() => handleClick(4)}/>
      <Square value ={squares[5]} onHandleClick = {() => handleClick(5)}/>
      </div>
      <div className='board-row'>
      <Square value ={squares[6]} onHandleClick = {() => handleClick(6)}/>
      <Square value ={squares[7]} onHandleClick = {() => handleClick(7)}/>
      <Square value ={squares[8]} onHandleClick = {() => handleClick(8)}/>
      </div>
    </>
  )
  function calculateWinner(squares) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] === squares[b] && squares[b] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  function game(){
    for(let i = 0; i<9; i++){
      if(!squares[i])
        return false;
    }
    return true;
  }
}
