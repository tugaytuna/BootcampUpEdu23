import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Learn React!",
      done: false,
    },
    {
      id: 2,
      task: "Practise Javascript",
      done: true,
    },
    {
      id: 3,
      task: "Publish App on Github",
      done: false,
    },
  ]);
  const [inputTask, setInputTask] = useState("");

  function addTask() {
    let taskTemp = { id: tasks.length + 1, task: inputTask, done: false };

    setTasks([...tasks, taskTemp]);

    setInputTask("");
  }

  return (
    <div className="App">
      <h1 className="title">To-Do List</h1>

      {tasks.map((item) => {
        return (
          <Task
            key={item.id}
            done={item.done}
            task={item.task}
            id={item.id}
          ></Task>
        );
      })}

      <br />
      <br />

      <input
        className="newTaskInput"
        placeholder="write your task..."
        type="text"
        name=""
        id=""
        value={inputTask}
        onChange={(e) => {
          setInputTask(e.target.value);
        }}
      />
      <br />
      <button onClick={addTask} className="addTask">
        Add Task
      </button>
    </div>
  );
}

export default App;
