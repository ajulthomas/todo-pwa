import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/interfaces/project.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName = 'Allen';

  tasks: Task[] = [];

  tasksSummary: any[] = [];

  constructor(private ts: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.ts.getTasks();
    this.tasksSummary = this.createTasksSummary();
  }

  createTasksSummary() {
    let todoCount = 0,
      inProgressCount = 0,
      completedCount = 0;
    for (const task of this.tasks) {
      if (task.status === 'TODO') {
        todoCount++;
      }
      if (task.status === 'IN_PROGRESS') {
        inProgressCount++;
      }
      if (task.status === 'COMPLETED') {
        completedCount++;
      }
    }
    return [
      {
        status: 'Tasks in Progress',
        icon: 'reorder',
        count: inProgressCount,
      },
      {
        status: 'Completed Tasks',
        icon: 'check_circle_outline_rounded',
        count: completedCount,
      },
      {
        status: 'Pending Tasks',
        icon: 'pending_actions_rounded',
        count: todoCount,
      },
    ];
  }
}
