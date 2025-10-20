import React, { useState, type FC } from "react";
import AddForm from "../addForm/AddForm";
import classes from "../addTask/addTask.module.css";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import type { TTaskInput } from "../../taskArray/taskArray";

export interface IAddTaskProps {
  onAddTask: (data: TTaskInput) => void;
}

const AddTask: FC<IAddTaskProps> = ({ onAddTask }) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <>
      <Dialog open={isModal} onClose={() => setIsModal(false)}>
        <AddForm onAddTask={onAddTask} />
      </Dialog>
      <div onClick={() => setIsModal(true)} className={classes["add-task"]}>
        <AddIcon sx={{ width: 30, color: "white" }} />
      </div>
    </>
  );
};

export default AddTask;
