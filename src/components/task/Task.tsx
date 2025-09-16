import React, { type FC } from "react";
import classes from "../task/task.module.css";
import Checkbox from "@mui/material/Checkbox";

const Task: FC = () => {
  return (
    <div className={classes.task}>
      <div className={classes["task-check"]}>
        <Checkbox />
      </div>

      <div className={classes["task-info"]}>
        <h2 className={classes["task-info_title"]}>Task 1</h2>
        <p className={classes["task-info_desc"]}>Task 1 desc</p>
      </div>

      <div className={classes["task-actions"]}></div>
    </div>
  );
};

export default Task;
