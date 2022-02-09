import React from "react";

//styling
import "../App/App.css";

//components
import Square from "../Square";

function Board({ board, move }) {
  return (
    <div className="Board">
      <div className="parent">
        <div className="div1">
          <Square />
        </div>
        <div className="div2"> 1</div>
        <div className="div3"> 2</div>
        <div className="div4"> 3</div>
        <div className="div5"> 4</div>
        <div className="div6"> 5</div>
        <div className="div7"> 6</div>
        <div className="div8"> 7</div>
        <div className="div9"> 8</div>
      </div>
    </div>
  );
}

export default Board;
