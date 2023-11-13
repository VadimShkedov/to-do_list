import React from "react";
import "./styles.css"

class TodoInput extends React.Component {
  render() {
    return (
      <div className="todoInput">
        <input type="text" placeholder="Add your new todo" />
        <button>button</button>
      </div>
    )
  }
}

export default TodoInput;