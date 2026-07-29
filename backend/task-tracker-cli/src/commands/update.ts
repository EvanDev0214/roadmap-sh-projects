import { getTaskByIdOrExit, updateTask } from '@/utils/taskStore';

const updateCommand = (id: number, description: string) => {
  const { index, task } = getTaskByIdOrExit(id);

  task.description = description;
  task.updatedAt = new Date();
  updateTask(index, task);
};

export default updateCommand;
