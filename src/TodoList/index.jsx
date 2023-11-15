import React from "react";
import ToDoElement from "../TodoElement";

class TodoList extends React.Component {

  render() {
    const { list, handleTodo, isComplete } = this.props;

    return (
      list.map((toDo) => {
        const { text, id } = toDo;

        return (
          <ToDoElement
            key={id}
            text={text}
            handleChange={handleTodo}
            isComplete={isComplete}
          />
        );
      })
    )
  }
}

export default TodoList;