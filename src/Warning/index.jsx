import React from "react";
import "./styles.css"

class Warning extends React.Component {
  render() {
    return (
      <p className="warning">{this.props.message}</p>
    )
  }
}

export default Warning;