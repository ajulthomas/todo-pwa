import { Task } from 'src/app/interfaces/project.interface';

export let TASKS_STORE: { [taskId: string]: Task } = {
  TSK0001: {
    id: 'TSK0001',
    title: 'Develop todo app',
    desc: 'Develop todo app',
    projectId: 'PRJT0001',
    status: 'TODO',
  },
  TSK0002: {
    id: 'TSK0002',
    title: 'Develop create task',
    desc: 'Develop create task',
    projectId: 'PRJT0001',
    status: 'COMPLETED',
  },
  TSK0003: {
    id: 'TSK0003',
    title: 'Develop local storage',
    desc: 'Develop local storage',
    projectId: 'PRJT0001',
    status: 'IN_PROGRESS',
  },
};
