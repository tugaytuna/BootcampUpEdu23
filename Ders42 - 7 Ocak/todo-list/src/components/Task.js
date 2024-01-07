import React from "react";
import "./TaskStyle.css";

function Task({ task, done, id }) {
  function checkedChange(e) {
    console.log(e.target.id, e.target.checked);
  }

  return (
    <div className="taskMain">
      <input
        // defaultChecked={done}
        className="taskCheckbox1"
        type="checkbox"
        name=""
        id={id}
        onChange={checkedChange}
      />
      <label className="taskLabel1" htmlFor={id}>
        {task}
      </label>
    </div>
  );
}

export default Task;
