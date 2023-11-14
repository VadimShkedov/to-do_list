import React from "react";
import TodoApp from "./TodoApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

class App extends React.Component {
  router = createBrowserRouter([{
    element: <TodoApp />,
    path: "/"
  }])

  render() {
    return <RouterProvider router={this.router} />
  }
}

export default App;