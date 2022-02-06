export interface Task {
  name: string;
  status: TaskStatus;
  project: string;
}

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';
