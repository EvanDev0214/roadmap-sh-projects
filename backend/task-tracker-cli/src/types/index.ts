export type Status = 'todo' | 'in-progress' | 'done';

export type Task = {
  id: number,
  description: string,
  status: Status,
  createdAt: Date,
  updatedAt: Date
};

export type Command =
  | 'add'
  | 'update'
  | 'delete'
  | 'list'
  | 'mark-in-progress'
  | 'mark-done'
  | '-h'
  | '--help'
  | '-v'
  | '--version';
