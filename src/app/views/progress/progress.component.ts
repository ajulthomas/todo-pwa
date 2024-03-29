import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from 'src/app/components/add-task-dialog/add-task-dialog.component';
import { Task, TaskStatus } from 'src/app/interfaces/project.interface';
import { TaskService } from 'src/app/services/task/task.service';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onDrop(e: CdkDragDrop<any>, taskStatus: TaskStatus) {
    let droppedTask: Task = e.item.data;
    droppedTask.status = taskStatus;
    this.taskService.updateTasks([droppedTask]);
    this.tasks = this.taskService.getTasks();
  }

  addTask(task?: Task) {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '40%',
      disableClose: true,
      data: task,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.tasks = this.taskService.getTasks();
    });
  }
}
