import fs from 'node:fs';
import path from 'node:path';
import { printError } from '@/utils/print';
import type { Task } from '@/types';

const taskFilePath = path.join(process.cwd(), 'task.json');
let tasks: Task[] = [];

export const initTaskFile = () => {
  if (!fs.existsSync(taskFilePath)) {
    fs.writeFileSync(taskFilePath, JSON.stringify([]));
  }

  tasks = JSON.parse(fs.readFileSync(taskFilePath, 'utf-8'));
};

export const getNextId = (existingTasks: Task[]): number => {
  if (existingTasks.length === 0) return 1;
  return Math.max(...existingTasks.map(task => task.id)) + 1;
};

export const readTasks = (): Task[] => {
  return [...tasks];
};

export const addTask = (task: Task) => {
  tasks.push(task);
  fs.writeFileSync(taskFilePath, JSON.stringify(tasks));
};

export const updateTask = (idx: number, task: Task) => {
  tasks[idx] = task;
  fs.writeFileSync(taskFilePath, JSON.stringify(tasks));
};

export const deleteTask = (idx: number) => {
  tasks.splice(idx, 1);
  fs.writeFileSync(taskFilePath, JSON.stringify(tasks));
};

export const getTaskByIdOrExit = (id: number) => {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) {
    printError(`Task with ID ${id} not found`);
    process.exit(1);
  }

  return {
    index,
    task: tasks[index]
  };
};
