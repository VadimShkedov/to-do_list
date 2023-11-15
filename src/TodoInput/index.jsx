import React from "react";
import "./styles.css"

class TodoInput extends React.Component {

  render() {
    const { inputValue, handleInputValue, handeValidationTodo } = this.props
 
    return (
      <div className="todoInput">
        <input 
          type="text"
          className="todoInput__entryField"
          value={inputValue} 
          onChange={(e) => handleInputValue(e.target.value)}
          placeholder="Add your new todo"
        />
        <input
          type="button" 
          className="todoInput__button" 
          onClick={handeValidationTodo}
        />
      </div>
    )
  }
}

export default TodoInput;