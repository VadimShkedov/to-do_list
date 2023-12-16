import React from "react";

import api from "../api/axiosInstance";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import Warning from "../Warning";
import TotalData from "../TotalData";
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

  async componentDidMount() {
    const { data } = await api.get('/tasks')
    this.setState({ toDoList: data })
  }

  handleAddingInput = (value) => {
    this.setState({
      textAddingToDo: value
    });
  }

  handleChange = async (isCheck, id) => {
    const modifyTasksArray = Object.assign([], this.state.toDoList);
    const indexChangedTask = modifyTasksArray.findIndex((task) => task._id === id);
    modifyTasksArray[indexChangedTask].isCheck = isCheck;

    this.setState({
      toDoList: modifyTasksArray,
      countCompleteTask: (isCheck) ? this.state.countCompleteTask + 1 : this.state.countCompleteTask - 1
    });

    await api.patch('/tasks', { id, isCheck })
  }

  addFormValidation = async () => {
    if (inputValidation(this.state.textAddingToDo)) {
      this.setState({
        warningMessage: "Некорректно введённое значение"
      });
      return;
    }

    const { data } = await api.post(
      '/tasks',
      { text: this.state.textAddingToDo }
    )

    this.setState({
      toDoList: [...this.state.toDoList, data],
      warningMessage: "",
      textAddingToDo: ""
    });
  }

  handleDeleteTodo = async (taskId) => {
    let currentCountTasks = this.state.countCompleteTask;

    const newTodoList = this.state.toDoList.filter((value) => {
      if (value.isCheck && value._id === taskId) {
        currentCountTasks -= 1;
      }

      return value._id !== taskId;
    });

    this.setState({
      toDoList: newTodoList,
      countCompleteTask: currentCountTasks
    });

    await api.delete('/tasks', { data: { id: taskId } })
  }

  render() {
    const { warningMessage, textAddingToDo, toDoList, countCompleteTask } = this.state;

    return (
      <section className="todoApp">
        <h1>Todo App</h1>
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
          handleChange={this.handleChange} 
          handleDeleteTodo={this.handleDeleteTodo} 
        />
      </section>
    )
  }
}

export default TodoApp;