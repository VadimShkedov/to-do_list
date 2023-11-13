import React from "react";
import TodoList from "./TodoApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 
class App extends React.Component {

  render() {
    return <TodoList />
  }
}

export default App;