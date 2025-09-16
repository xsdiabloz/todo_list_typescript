import React, { type FC } from "react";
import classes from "../taskList/taskList.module.css";
import Task from "../task/Task";
import { type T } from "../../taskArray/taskArray";

interface ITasks {
  title: string;
  tasks: T[];
}

const TaskList: FC<ITasks> = ({ tasks, title }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes["list-title"]}>{title}</div>
      <div className={classes["task-list"]}>
        {tasks.length > 0 ? (
          tasks.map((item) => <Task key={item.id} task={item} />)
        ) : (
          <h1>No tasks...</h1>
        )}
      </div>
    </div>
  );
};

export default TaskList;
