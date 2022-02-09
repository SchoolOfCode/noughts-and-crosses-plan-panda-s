import React from "react";
import "../App/App.css";

function Square({ move, value }) {
  return (
    <div className="SquareButton">
      {/* need to display the value */}
      <button style={{ width: "100%" }}>Empty</button>
    </div>
  );
}

export default Square;
