import React from "react";
import { useState } from "react";

//styling
import "../App/App.css";

//components
import Square from "../Square";

function Board({ board, move }) {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);

  function handleOnClick(i) {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount % 2 === 1) {
      //const newSquare = Array(i).fill("X");
      //console.log(newSquare);
      setSquare([...square.slice(0, i), "X", ...square.slice(i + 1)]);
      console.log(square);
    } else {
      //const newSquare = Array(i).fill("X");
      setSquare([...square.slice(0, i), "O", ...square.slice(i + 1)]);
      console.log(square);
    }
  }

  function renderSquare(i) {
    return (
      <Square
        value={square[i]}
        onClick={() => handleOnClick(i)}
        count={count}
      />
    );
  }

  return (
    <div className="Board">
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <p>{count}</p>
    </div>
  );
}

export default Board;
