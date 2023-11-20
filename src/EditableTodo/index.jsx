import React from "react";
import "./styles.css"

class EditableTodo extends React.Component {
  render() {
    const { handleEditingTodo, textEditingToDo } = this.props

    return (
      <div className="editableTodo">
        <input type="text" onChange={handleEditingTodo} value={textEditingToDo} />
        <button className="editableTodo__applyChanges"></button>
      </div>
    )
  }
}

export default EditableTodo;