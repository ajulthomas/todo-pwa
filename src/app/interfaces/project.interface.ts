export interface NewTask {
  title: string;
  desc?: string;
  status: TaskStatus;
}

export interface Task extends NewTask {
  id: string;
}

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';
