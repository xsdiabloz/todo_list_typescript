export type TTasksArray = {
  id: number | undefined;
  title: string;
  desc: string;
  done?: boolean;
};

export type TTaskInput = Omit<TTasksArray, "id">;

export const tasksArray: TTasksArray[] = [
  { id: 1, title: "Task-1", desc: "Task-1 desc", done: false },
  { id: 2, title: "Task-2", desc: "Task-2 desc", done: false },
  { id: 3, title: "Task-3", desc: "Task-3 desc", done: false },
];
