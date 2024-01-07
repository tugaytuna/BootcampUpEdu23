import { useState, useEffect } from "react";
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
      done: false,
    },
    {
      id: 3,
      task: "Publish App on Github",
      done: false,
    },
  ]);
  const [inputTask, setInputTask] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  useEffect(() => {
    let counter = 0;
    tasks.map((item) => {
      if (item.done) {
        counter++;
      }
    });

    setCompletedTaskCount(counter);
  }, [tasks]);

  function addTask() {
    if (inputTask != "") {
      let taskTemp = { id: tasks.length + 1, task: inputTask, done: false };
      setTasks([...tasks, taskTemp]);
      setInputTask("");
      alert("Task Added!");
    } else {
      alert("You can't add blank task!");
    }
  }

  function taskDone(taskId, checked) {
    // setTasks((prev) =>
    //   prev.map((item) =>
    //     item.id == taskId ? { ...item, ["done"]: checked } : item
    //   )
    // );

    let tempTask = [];
    tasks.map((item) => {
      if (item.id == taskId) {
        let temp2 = item;
        temp2.done = checked;
        tempTask.push(temp2);
      } else {
        tempTask.push(item);
      }
    });

    setTasks(tempTask);

    // console.log("task done", taskId, checked);
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
            doneFunc={taskDone}
          ></Task>
        );
      })}

      <label className="taskCount" htmlFor="">
        {completedTaskCount + " / " + tasks.length}
      </label>
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
