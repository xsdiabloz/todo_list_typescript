import "./App.css";
import React, { useState } from "react";
import TaskList from "./components/taskList/TaskList";
import {
  tasksArray,
  type TTasksArray,
  type TTaskInput,
} from "./taskArray/taskArray";
import AddTask from "./components/addTask/AddTask";

function App() {
  const [tasks, setTasks] = useState<TTasksArray[]>(tasksArray);

  const onAddTask = (data: TTaskInput) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: (prevTasks.at(-1)?.id ?? 0) + 1,
        ...data,
      },
    ]);
  };

  return (
    <>
      <div className="main-wrapper">
        <TaskList title="Completed" tasks={tasks} />
        <TaskList title="In process" tasks={tasks} />
      </div>
      <AddTask onAddTask={onAddTask} />
    </>
  );
}

export default App;
