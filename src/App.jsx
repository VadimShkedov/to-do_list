import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoApp from "./TodoApp";

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