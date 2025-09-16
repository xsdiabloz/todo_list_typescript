import React, { type FC } from "react";
import classes from "../task/task.module.css";

const Task: FC = () => {
  return (
    <div className={classes.task}>
      <h2>Task 1</h2>
      <p>Task 1 desc</p>
    </div>
  );
};

export default Task;
