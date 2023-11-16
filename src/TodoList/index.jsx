import React from "react";
import ToDoElement from "../TodoElement";

class TodoList extends React.Component {

  render() {
    const { list, handleChange, handleDeleteTodo } = this.props;

    return (
      list.map((toDo) => {
        const { text, id } = toDo;

        return (
          <ToDoElement
            key={id}
            text={text}
            toDoId={id}
            handleChange={handleChange}
            isComplete={toDo.isComplete}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })
    )
  }
}

export default TodoList;