import React from "react";
import "./styles.css";

class TodoElement extends React.Component {
  render() {
    const { text, handleChange, isComplete, toDoId, handleDeleteTodo, createEditingTodo } = this.props;

    return (
      <div className="todoElement">
        <div className="todoElement__info">
          <input
            type="checkbox"
            className="todoElement__check"
            value={isComplete}
            onChange={(e) => handleChange(e.target.checked, toDoId)}
          />
          <p>{text}</p>
        </div>
        <button
          className="todoElement__editButton"
          type="button"
          onClick={() => createEditingTodo(toDoId, text)}
        >
        </button>
        <button
          className="todoElement__deleteButton"
          type="button"
          onClick={() => handleDeleteTodo(toDoId)}
        >
        </button>
      </div>
    )
  }
}

export default TodoElement;