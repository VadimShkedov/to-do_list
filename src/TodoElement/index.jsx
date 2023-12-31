import React from "react";
import "./styles.css";

class TodoElement extends React.Component {
  render() {
    const { text, handleChange, isComplete, toDoId, handleDeleteTodo } = this.props;

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
        <input
          type="button"
          className="todoElement__deleteButton"
          onClick={() => handleDeleteTodo(toDoId)}
        />
      </div>
    )
  }
}

export default TodoElement;