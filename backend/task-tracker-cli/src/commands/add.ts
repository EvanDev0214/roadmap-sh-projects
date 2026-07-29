import type { Task } from '@/types';
import { printSuccess } from '@/utils/print';
import { getNextId, readTasks, addTask } from '@/utils/taskStore';

const addCommand = (description: string) => {
  const tasks = readTasks();

  const task: Task = {
    id: getNextId(tasks),
    description,
    status: 'todo',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  addTask(task);
  printSuccess(`Task added successfully (ID: ${task.id})`);
};

export default addCommand;
