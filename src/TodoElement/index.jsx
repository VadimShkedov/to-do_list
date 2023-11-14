import React from "react";
import "./styles.css";

class ToDoElement extends React.Component {
  render() {
    const { text, handler, isCompleted } = this.props;

    return (
      <div className="todoElement">
        <div className="todoElement__info">
          <input
            type="checkbox"
            className="todoElement__check"
            value={isCompleted}
            onChange={(e) => handler(e.target.checked)}
          />
          <p>{text}</p>
        </div>
        <input
          type="button"
          className="todoElement__deleteButton"
          onClick={handler}
        />
      </div>
    )
  }
}

export default ToDoElement;