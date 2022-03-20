export interface Task {
  id: string;
  title: string;
  desc?: string;
  status: TaskStatus;
  projectId: string;
}

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'COMPLETED' | 'ARCHIVED';
