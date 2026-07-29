import { getTaskByIdOrExit, updateTask } from '@/utils/taskStore';

const markInProgressCommand = (id: number) => {
  const { index, task } = getTaskByIdOrExit(id);
  task.status = 'in-progress';
  updateTask(index, task);
};

export default markInProgressCommand;
