import React, { useState } from "react";
import classes from "../addForm/addForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddForm = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  return (
    <>
      <form className={classes["add-task_form"]}>
        <h2>New Task</h2>
        <div className={classes["form-title"]}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title..."
          />
        </div>
        <div className={classes["form-desc"]}>
          <TextField
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="desc..."
          />
        </div>
        <Button type="submit" variant="outlined">
          Add Task
        </Button>
      </form>
    </>
  );
};

export default AddForm;
