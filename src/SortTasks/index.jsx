import React from "react";
import "./styles.css";

class SortTasks extends React.Component {
  
  render() {
    const { sortedMethod, handleSortedMethod } = this.props

    return (
      <div className="sortTasks">
        <label htmlFor="select">Сортировать по</label>
        <select id="select" value={sortedMethod} onChange={handleSortedMethod} className="sortTasks__mainSelect">
          <option value="time">Времени добаления</option>
          <option value="complete">Выполненым</option>
        </select>
      </div>
    )
  }
}

export default SortTasks;