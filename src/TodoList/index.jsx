import React from "react";
import ToDoElement from "../TodoElement";
import EditableTodo from "../EditableTodo";

class TodoList extends React.Component {

  render() {
    const { list, handleChange, handleDeleteTodo, editingTaskId, textEditingToDo, validationEditingTodo, handleEditingTodo, createEditingTodo } = this.props;

    return (
      list.map((toDo) => {
        const { text, id, isComplete } = toDo;

        if (editingTaskId === id) {
          return (
            <EditableTodo
              key={id}
              textEditingToDo={textEditingToDo}
              handleEditingTodo={handleEditingTodo}
              validationEditingTodo={validationEditingTodo}
            />
          )
        }

        return (
          <ToDoElement
            key={id}
            text={text}
            toDoId={id}
            handleChange={handleChange}
            isComplete={isComplete}
            handleDeleteTodo={handleDeleteTodo}
            createEditingTodo={createEditingTodo}
          />
        );
      })
    )
  }
}

export default TodoList;