import { getTaskByIdOrExit, updateTask } from '@/utils/taskStore';

const markDoneCommand = (id: number) => {
  const { index, task } = getTaskByIdOrExit(id);
  task.status = 'done';
  updateTask(index, task);
};

export default markDoneCommand;
