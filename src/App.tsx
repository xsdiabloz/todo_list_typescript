import "./App.css";
import TaskList from "./components/taskList/TaskList";
import { taskArray } from "./taskArray/taskArray";

function App() {
  return (
    <div className="main-wrapper">
      <TaskList title="Completed" tasks={taskArray} />
      <TaskList title="In process" tasks={taskArray} />
    </div>
  );
}

export default App;
