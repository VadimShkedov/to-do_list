import React from "react";
import "./styles.css";

class SortTasks extends React.Component {

  render() {
    const { sortingMethod, handleSortingMethod } = this.props

    return (
      <div className="sortTasks">
        <label htmlFor="select">Сортировать по</label>
        <select
          id="select"
          value={sortingMethod}
          onChange={handleSortingMethod}
          className="sortTasks__mainSelect"
        >
          <option value="time">Времени добавления</option>
          <option value="complete">Выполненным</option>
        </select>
      </div>
    )
  }
}

export default SortTasks;