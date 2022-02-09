import React from "react";

function Square({ move, value, onClick, count }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {/* {count % 2 === 0 ? "X" : "O"}  */}
        {value}
      </button>
    </div>
  );
}

export default Square;
