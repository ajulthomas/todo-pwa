import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/project.interface';
import { TASKS_STORE } from './tasks.data-store';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return Object.values(TASKS_STORE);
  }

  addTasks() {}

  updateTasks(tasks: Task[]) {
    tasks.forEach((task: Task) => {
      TASKS_STORE[task.id] = task;
    });
  }

  saveTasks() {}
}
