import React from "react";
import "./styles.css"

class EditableTodo extends React.Component {
  render() {
    const { handleEditTodo, textEditingToDo } = this.props

    return (
      <div className="editableTodo">
        <input type="text" onChange={handleEditTodo} value={textEditingToDo} />
        <button className="editableTodo__applyChanges"></button>
      </div>
    )
  }
}

export default EditableTodo;