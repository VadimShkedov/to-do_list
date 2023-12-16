import React from "react";
import ToDoElement from "../TodoElement";

class TodoList extends React.Component {

  render() {
    const { list, handleChange, handleDeleteTodo } = this.props;

    return (
      list.map((toDo) => {
        const { text, _id, isCheck } = toDo;

        return (
          <ToDoElement
            key={_id}
            text={text}
            toDoId={_id}
            handleChange={handleChange}
            isCheck={isCheck}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })
    )
  }
}

export default TodoList;