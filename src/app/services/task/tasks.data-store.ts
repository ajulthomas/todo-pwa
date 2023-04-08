import { Task } from 'src/app/interfaces/project.interface';

export let TASKS_STORE: { [taskId: string]: Task } = {
  1: {
    id: '1',
    title: 'Develop todo app',
    desc: 'Develop todo app',
    // projectId: 'PRJT0001',
    status: 'TODO',
  },
  2: {
    id: '2',
    title: 'Develop create task',
    desc: 'Develop create task',
    // projectId: 'PRJT0001',
    status: 'COMPLETED',
  },
  3: {
    id: '3',
    title: 'Develop local storage',
    desc: 'Develop local storage',
    // projectId: 'PRJT0001',
    status: 'IN_PROGRESS',
  },
};
