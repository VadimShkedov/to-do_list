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
      countCompleteTask: 0,
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

  handleChange = (isChecked, taskId) => {
    const modifyTasksArray = Object.assign([], this.state.toDoList);
    const indexChangedTask = modifyTasksArray.findIndex((task) => task.id === taskId)
    modifyTasksArray[indexChangedTask].isComplete = isChecked

    this.setState({
      toDoList: modifyTasksArray,
      countCompleteTask: (isChecked) ? this.state.countCompleteTask + 1 : this.state.countCompleteTask - 1
    })
  }

  addFormValidation = () => {
    if (inputValidation(this.state.textAddingToDo)) {
      this.setState({
        warningMessage: "Некорректно введённое значение"
      });
      return;
    }
    const toDoList = this.state.toDoList;

    const modifiedTodoElement = {
      id: (toDoList.length !== 0) ? toDoList[toDoList.length - 1].id + 1 : 0,
      text: this.state.textAddingToDo,
      isComplete: false
    };

    this.setState({
      toDoList: [...this.state.toDoList, modifiedTodoElement],
      warningMessage: ""
    });
  }

  handleDeleteTodo = (taskId) => {
    let currentCountTasks = this.state.countCompleteTask;

    const newTodoList = this.state.toDoList.filter((value) => {
      if (value.isComplete && value.id === taskId) {
        currentCountTasks -= 1;
      }

      return value.id !== taskId;
    });

    this.setState({
      toDoList: newTodoList,
      countCompleteTask: currentCountTasks
    });
  }

  render() {
    const { warningMessage, valueFromInput, toDoList, countCompleteTask } = this.state;

    return (
      <section className="todoList">
        <h1>Todo App</h1>
        <Warning message={warningMessage} />
        <TodoInput
          inputValue={valueFromInput}
          handleInputValue={this.handleAddingInput}
          handeValidationTodo={this.addFormValidation}
        />
        <TodoList list={toDoList} handleChange={this.handleChange} handleDeleteTodo={this.handleDeleteTodo} />
        <p>Total - {toDoList.length} tasks, completed - {countCompleteTask}</p>
      </section>
    )
  }
}

export default TodoApp;