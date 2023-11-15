import React from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import Warning from "../Warning";
import inputValidation from "../helpers/inputValidation";
import "./styles.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      //currentIdTaskComplete: -1,
      textAddingToDo: "",
      textEditingToDo: "",
      warningMessage: ""
    };
  };

  handleAddingInput = (value) => {
    this.setState({
      textAddingToDo: value
    });
  }

  addFormValidation = () => {
    const { textAddingToDo, toDoList } = this.state;

    if (inputValidation(textAddingToDo)) {
      this.setState({
        warningMessage: "Некорректно введённое значение"
      });
      return;
    }

    const modifiedTodoElement = {
      id: toDoList.length,
      text: textAddingToDo
    };

    this.setState({
      toDoList: [...toDoList, modifiedTodoElement],
      warningMessage: ""
    });
  }

  render() {
    const { warningMessage, valueFromInput, toDoList } = this.state;

    return (
      <section className="todoList">
        <h1>Todo App</h1>
        <Warning message={warningMessage} />
        <TodoInput 
          inputValue={valueFromInput} 
          handleInputValue={this.handleAddingInput} 
          handeValidationTodo={this.addFormValidation}
        />
        <TodoList list={toDoList} />
      </section>
    )
  }
}

export default TodoApp;