import React from "react";
import "./styles.css"

class TodoInput extends React.Component {

  render() {
    const { inputValue, handleInputValue, addTodoAndValidation } = this.props
 
    return (
      <div className="todoInput">
        <input 
          type="text"
          className="todoInput__inputText"
          value={inputValue} 
          onChange={(e) => handleInputValue(e.target.value)}
          placeholder="Add your new todo"
        />
        <input
          type="button" 
          className="todoInput__button" 
          onClick={addTodoAndValidation}
        />
      </div>
    )
  }
}

export default TodoInput;