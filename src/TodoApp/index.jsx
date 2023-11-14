import React from "react";
import TodoInput from "../TodoInput";
import ListTodo from "../ListTodo";
import Warning from "../Warning";
import inputValidation from "../helpers/inputValidation";
import "./styles.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      //currentIdTaskComplete: -1,
      valueAddingFromInput: "",
      valueEditingFormInput: "",
      warningMessage: ""
    };
  }

  handleAddingInput = (value) => {
    this.setState({
      valueAddingFromInput: value
    });
  }

  addFormValidation = () => {
    const { valueAddingFromInput, toDoList } = this.state;

    if (inputValidation(valueAddingFromInput)) {
      this.setState({
        warningMessage: "Некорректно введённое значение"
      });
      return;
    }

    const modifiedTodoElement = {
      id: toDoList.length,
      text: valueAddingFromInput
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
          addTodoAndValidation={this.addFormValidation}
        />
        <ListTodo list={toDoList} />
      </section>
    )
  }
}

export default TodoApp;