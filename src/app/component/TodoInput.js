import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    props.addList(inputText);
    setInputText("");
  }

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="add-btn" onClick={handleClick}>+</button>
    </div>
  );
}

export default TodoInput;
