import React from "react";
import "./styles.css"

class TotalData extends React.Component {
  render() {
    const { countAll, countCompleteTask } = this.props;

    return (
      <p className="totalData">Total - <b>{countAll}</b> tasks, completed - <b>{countCompleteTask}</b></p>
    )
  }
}

export default TotalData;