export type T = {
  id: number;
  title: string;
  desc: string;
  done?: boolean;
};

export const taskArray: T[] = [
  { id: 1, title: "Task-1", desc: "Task-1 desc", done: false },
  { id: 2, title: "Task-2", desc: "Task-2 desc", done: false },
  { id: 3, title: "Task-3", desc: "Task-3 desc", done: false },
];
