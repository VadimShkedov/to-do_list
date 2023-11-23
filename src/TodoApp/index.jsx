import React from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import Warning from "../Warning";
import TotalData from "../TotalData";
import inputValidation from "../helpers/inputValidation";
import SortTasks from "../SortTasks";
import "./styles.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      countCompleteTask: 0,
      textAddingToDo: "",
      textEditingToDo: "",
      warningMessage: "",
      sortedMethod: "time",
      editingTaskId: null
    };
  };

  handleAddingTodo = (text) => {
    this.setState({
      textAddingToDo: text
    });
  }

  handleChange = (isChecked, taskId) => {
    const modifyTasksArray = Object.assign([], this.state.toDoList);
    const indexChangedTask = modifyTasksArray.findIndex((task) => task.id === taskId);
    modifyTasksArray[indexChangedTask].isComplete = isChecked;

    this.setState({
      toDoList: modifyTasksArray,
      countCompleteTask: (isChecked) ? this.state.countCompleteTask + 1 : this.state.countCompleteTask - 1
    });
  }

  handleEditingTodo = (text) => {
    this.setState({
      textEditingToDo: text,
    });
  }

  createEditingTodo = (taskId, text) => {
    this.setState({
      editingTaskId: taskId,
      textEditingToDo: text
    });
  }

  handleSortedMethod = (e) => {
    const method = e.target.value;
    let modifyArray = [...this.state.toDoList]
    switch (method) {
      case "complete":
        modifyArray.sort((task) => task.isComplete ? -1 : 1)
        break;

      case "time":
        modifyArray.sort((a, b) => a.id - b.id);
        break;

      default: break;
    }

    this.setState({
      toDoList: modifyArray,
      sortedMethod: method
    });
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
      warningMessage: "",
      textAddingToDo: ""
    });
  }

  editFormValidation = () => {
    if (inputValidation(this.state.textEditingToDo)) {
      this.setState({
        warningMessage: "Некорректно введённое значение"
      });
      return;
    }

    const newTodoArray = Object.assign([], this.state.toDoList)
    const indexEditingTask = this.state.toDoList.findIndex((task) => task.id === this.state.editingTaskId)
    newTodoArray[indexEditingTask].text = this.state.textEditingToDo;

    this.setState({
      toDoList: newTodoArray,
      textEditingToDo: "",
      editingTaskId: null,
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

  handleDeletingAllTasks = () => {
    this.setState({
      toDoList: [],
      countCompleteTask: 0
    })
  }

  render() {
    const { warningMessage, textAddingToDo, toDoList, countCompleteTask, sortedMethod, editingTaskId, textEditingToDo } = this.state;

    return (
      <section className="todoApp">
        <h1>Todo App</h1>
        <div>
          <SortTasks
            sortingMethod={sortedMethod}
            handleSortingMethod={this.handleSortedMethod}
          />
          <button
            type="button"
            className="todoApp__deleteAll"
            title="Удалить все задачи"
            onClick={this.handleDeletingAllTasks}
          >
          </button>
        </div>
        <Warning message={warningMessage} />
        <TodoInput
          textTodo={textAddingToDo}
          handleInputValue={this.handleAddingTodo}
          handleValidationTodo={this.addFormValidation}
        />
        <TotalData
          countAllTasks={toDoList.length}
          countCompleteTask={countCompleteTask}
        />
        <TodoList
          list={toDoList}
          editingTaskId={editingTaskId}
          textEditingToDo={textEditingToDo}
          handleChange={this.handleChange}
          handleDeleteTodo={this.handleDeleteTodo}
          validationEditingTodo={this.editFormValidation}
          handleEditingTodo={this.handleEditingTodo}
          createEditingTodo={this.createEditingTodo}
        />
      </section>
    )
  }
}

export default TodoApp;