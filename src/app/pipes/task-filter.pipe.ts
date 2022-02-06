import { Pipe, PipeTransform } from '@angular/core';
import { Task, TaskStatus } from '../interfaces/project.interface';

@Pipe({ name: 'taskFilter' })
export class TaskFilterPipe implements PipeTransform {
  transform(value: Task[], status: TaskStatus): Task[] {
    return value.filter((item) => item.status === status);
  }
}
