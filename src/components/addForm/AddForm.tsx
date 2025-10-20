import React, { useState, type FormEvent } from "react";
import classes from "../addForm/addForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddForm = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const addNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !desc) return;
    console.log("task added");
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <form className={classes["add-task_form"]} onSubmit={addNewTask}>
        <h2>New Task</h2>
        <div className={classes["form-title"]}>
          <TextField
            error={!title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="title"
            helperText={!title && "Fill the gaps"}
          />
        </div>
        <div className={classes["form-desc"]}>
          <TextField
            error={!desc}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            label="desc"
            helperText={!desc && "Fill the gaps"}
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
