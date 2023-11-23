import React from "react";
import "./styles.css"

class EditableTodo extends React.Component {
  render() {
    const { handleEditingTodo, textEditingToDo, validationEditingTodo } = this.props

    return (
      <div className="editableTodo">
        <input 
          type="text" 
          className="editableTodo__entryField" 
          onChange={(e) => handleEditingTodo(e.target.value)} 
          value={textEditingToDo} 
        />
        <button 
          type="button"
          onClick={validationEditingTodo} 
          className="editableTodo__applyChanges"
        >
        </button>
      </div>
    )
  }
}

export default EditableTodo;