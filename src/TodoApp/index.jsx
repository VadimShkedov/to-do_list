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

  handleAddingInput = (value) => {
    this.setState({
      textAddingToDo: value
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

  handleEdit = (text, taskId) => {
    this.setState({
      textEditingToDo: text,
      editingTaskId: taskId
    });
  }

  handleSortedMethod = (e) => {
    const method = e.target.value;

    if (method === "complete") {
      const uncheckedTasksArray = [];
      const completedTasksArray = [];

      for (const task of this.state.toDoList) {
        if (task.isComplete) {
          uncheckedTasksArray.push(task)
          continue
        }
        completedTasksArray.push(task)
      }

      const concattedArrays = [].concat(uncheckedTasksArray, completedTasksArray);
      this.setState({
        toDoList: concattedArrays
      });
    } else {
      this.setState({
        toDoList: this.state.toDoList.sort((a, b) => a.id - b.id)
      });
    }

    this.setState({
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
          <SortTasks sortedMethod={sortedMethod} handleSortedMethod={this.handleSortedMethod} />
          <button className="todoApp__deleteAll" title="Удалить все задачи" onClick={this.handleDeletingAllTasks}></button>
        </div>
        <Warning message={warningMessage} />
        <TodoInput
          textTodo={textAddingToDo}
          handleInputValue={this.handleAddingInput}
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
        />
      </section>
    )
  }
}

export default TodoApp;