import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from 'src/app/interfaces/project.interface';
import { TaskService } from 'src/app/services/task/task.service';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onDrop(e: CdkDragDrop<any>, taskStatus: TaskStatus) {
    let droppedTask: Task = e.item.data;
    droppedTask.status = taskStatus;
    this.taskService.updateTasks([droppedTask]);
    this.tasks = this.taskService.getTasks();
  }
}
