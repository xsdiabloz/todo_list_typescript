import React, { useState } from "react";
import classes from "../addTask/addTask.module.css";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";

const AddTask = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <>
      <Dialog open={isModal} onClose={() => setIsModal(false)}>
        <div>Is visible</div>
      </Dialog>
      <div onClick={() => setIsModal(true)} className={classes["add-task"]}>
        <IconButton sx={{ width: 30, color: "white" }} />
      </div>
    </>
  );
};

export default AddTask;
