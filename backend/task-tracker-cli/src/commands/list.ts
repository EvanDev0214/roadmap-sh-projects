import { styleText } from 'node:util';
import { printError } from '@/utils/print';
import { readTasks } from '@/utils/taskStore';
import type { Status } from '@/types';

const listCommand = (statusFilter?: Status) => {
  const tasks = readTasks();
  const filtered = statusFilter
    ? tasks.filter(task => task.status === statusFilter)
    : tasks;

  if (filtered.length === 0) {
    printError('No tasks found.');
    process.exit(1);
  }

  filtered.forEach(task => {
    console.log(`${styleText('yellow', String(task.id))}  ${styleText('greenBright', task.status.padEnd(12))}  ${task.description}`);
  });
};

export default listCommand;
