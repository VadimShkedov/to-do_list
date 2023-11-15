import React from "react";
import "./styles.css";

class TodoElement extends React.Component {
  render() {
    const { text, handleChange, isCompleted } = this.props;

    return (
      <div className="todoElement">
        <div className="todoElement__info">
          <input
            type="checkbox"
            className="todoElement__check"
            value={isCompleted}
            onChange={(e) => handleChange(e.target.checked)}
          />
          <p>{text}</p>
        </div>
        <input
          type="button"
          className="todoElement__deleteButton"
          onClick={handleChange}
        />
      </div>
    )
  }
}

export default TodoElement;