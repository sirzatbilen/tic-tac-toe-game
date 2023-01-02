import React, { useState } from "react";
import "./styles.css";

function Box(props) {
  const [text, setText] = useState("");

  function ToggleText() {
    if (text === "") {
      setText(props.currentState);
      props.changeTurn(props.row, props.col);
    }
  }
  return (
    <div className="box" onClick={ToggleText}>
      {text}
    </div>
  );
}

export default Box;
