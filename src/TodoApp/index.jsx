import React from "react";
import TodoInput from "../TodoInput";
import "./styles.css"

class TodoList extends React.Component {
  render() {
    return (
      <section className="todoList">
        <h1>Todo App</h1>
        <TodoInput />
      </section>
    )
  }
}

export default TodoList;