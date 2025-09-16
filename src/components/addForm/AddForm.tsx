import React from "react";
import classes from "../addForm/addForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddForm = () => {
  return (
    <>
      <form className={classes["add-task_form"]}>
        <h2>New Task</h2>
        <div className={classes["form-title"]}>
          <TextField />
        </div>
        <div className={classes["form-desc"]}>
          <TextField />
        </div>
      </form>
    </>
  );
};

export default AddForm;
