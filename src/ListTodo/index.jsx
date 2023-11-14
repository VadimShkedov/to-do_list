import React from "react";
import ToDoElement from "../TodoElement";

class ListTodo extends React.Component {

  render() {
    const { list, handleTodo, isComplete } = this.props

    return (
      list.map((toDoElement) => {
        const { text, id } = toDoElement;

        return (
          <ToDoElement
            key={id}
            text={text}
            handler={handleTodo}
            isComplete={isComplete}
          />
        );
      })
    )
  }
}

export default ListTodo;