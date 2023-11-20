import React from "react";
import "./styles.css"

class TotalData extends React.Component {
  render() {
    const { countAllTasks, countCompleteTask } = this.props;

    return (
      <p className="totalData">Total - <b>{countAllTasks}</b> tasks, completed - <b>{countCompleteTask}</b></p>
    )
  }
}

export default TotalData;