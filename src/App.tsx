import "./App.css";
import React, { useState } from "react";
import TaskList from "./components/taskList/TaskList";
import { taskArray, type T } from "./taskArray/taskArray";
import { AddTask } from "@mui/icons-material";

function App() {
  const [tasks, setTasks] = useState<T[]>(taskArray);

  return (
    <>
      <div className="main-wrapper">
        <TaskList title="Completed" tasks={taskArray} />
        <TaskList title="In process" tasks={taskArray} />
      </div>
      <AddTask />
    </>
  );
}

export default App;
