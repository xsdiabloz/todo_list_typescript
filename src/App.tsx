import "./App.css";
import React, { useState } from "react";
import TaskList from "./components/taskList/TaskList";
import { tasksArray, type TTasksArray } from "./taskArray/taskArray";
import AddTask from "./components/addTask/AddTask";

function App() {
  const [tasks, setTasks] = useState<TTasksArray[]>(tasksArray);

  return (
    <>
      <div className="main-wrapper">
        <TaskList title="Completed" tasks={tasksArray} />
        <TaskList title="In process" tasks={tasksArray} />
      </div>
      <AddTask />
    </>
  );
}

export default App;
