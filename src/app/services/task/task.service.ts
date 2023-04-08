import { Injectable } from '@angular/core';
import { NewTask, Task } from 'src/app/interfaces/project.interface';
import { TASKS_STORE } from './tasks.data-store';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private utils: UtilsService) {}

  getTasks(): Task[] {
    return Object.values(TASKS_STORE);
  }

  addTasks(tasks: NewTask[]) {
    tasks.forEach((t) => {
      let id = this.utils.generateUniqueId();
      while (TASKS_STORE[id]) {
        id = this.utils.generateUniqueId();
      }
      TASKS_STORE[id] = { id, ...t };
    });
  }

  updateTasks(tasks: Task[]) {
    tasks.forEach((task: Task) => {
      TASKS_STORE[task.id] = task;
    });
  }

  saveTasks() {}
}
