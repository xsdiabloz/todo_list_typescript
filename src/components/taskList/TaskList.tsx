import React, { type FC } from "react";
import classes from "../taskList/taskList.module.css";
import Task from "../task/Task";
import { type tasks } from "../../taskArray/taskArray";

interface ITask {
  title: string;
  tasks: tasks;
}

const TaskList: FC<ITask> = ({ tasks, title }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes["list-title"]}>{title}</div>
      <div className={classes["task-list"]}>
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default TaskList;
