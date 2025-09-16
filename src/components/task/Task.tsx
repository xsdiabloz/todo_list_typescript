import React, { type FC } from "react";
import classes from "../task/task.module.css";
import Checkbox from "@mui/material/Checkbox";
import type { T } from "../../taskArray/taskArray";

interface ITask {
  task: T;
}

const Task: FC<ITask> = ({ task }) => {
  return (
    <div className={classes.task}>
      <div className={classes["task-check"]}>
        <Checkbox />
      </div>

      <div className={classes["task-info"]}>
        <h2 className={classes["task-info_title"]}>{task.title}</h2>
        <p className={classes["task-info_desc"]}>{task.desc}</p>
      </div>

      <div className={classes["task-actions"]}></div>
    </div>
  );
};

export default Task;
