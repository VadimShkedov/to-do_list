import React from "react";
import "./styles.css"

class TodoInput extends React.Component {

  render() {
    const { textTodo, handleInputValue, handleValidationTodo } = this.props

    return (
      <div className="todoInput">
        <input
          type="text"
          className="todoInput__entryField"
          value={textTodo}
          onChange={(e) => handleInputValue(e.target.value)}
          placeholder="Add your new todo"
        />
        <button
          type="button"
          title="Добавить задачу"
          className="todoInput__button"
          onClick={handleValidationTodo}
        >
        </button>
      </div>
    )
  }
}

export default TodoInput;