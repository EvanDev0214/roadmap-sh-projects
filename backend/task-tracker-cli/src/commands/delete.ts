import { deleteTask, getTaskByIdOrExit } from '@/utils/taskStore';

const deleteCommand = (id: number) => {
  const { index } = getTaskByIdOrExit(id);
  deleteTask(index);
};

export default deleteCommand;
