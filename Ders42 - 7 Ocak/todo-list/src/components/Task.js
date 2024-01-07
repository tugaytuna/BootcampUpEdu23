import React from "react";
import "./TaskStyle.css";

function Task({ task, done, id, doneFunc }) {
  function checkedChange(e) {
    doneFunc(e.target.id, e.target.checked);
  }

  return (
    <div className={done ? "taskMain doneMain " : "taskMain"}>
      <input
        defaultChecked={done}
        className="taskCheckbox1"
        type="checkbox"
        name=""
        id={id}
        onChange={checkedChange}
      />
      <label className={done ? "taskLabel1 done" : "taskLabel1"} htmlFor={id}>
        {task}
      </label>
    </div>
  );
}

export default Task;
