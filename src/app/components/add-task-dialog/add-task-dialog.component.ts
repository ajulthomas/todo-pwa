import { TaskService } from 'src/app/services/task/task.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewTask, TaskStatus } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss'],
})
export class AddTaskDialogComponent implements OnInit {
  taskName: string = '';
  taskDescription: string = '';
  taskStatus: TaskStatus = 'TODO';

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    // Initialize the dialog with existing data, if any
    if (this.data) {
      this.taskName = this.data.taskName;
      this.taskDescription = this.data.taskDescription;
      this.taskStatus = this.data.taskStatus;
    }
  }

  onSaveClick(): void {
    // Save the form data and close the dialog
    const taskData: NewTask = {
      title: this.taskName,
      desc: this.taskDescription,
      status: this.taskStatus,
    };
    this.taskService.addTasks([taskData]);
    this.dialogRef.close(taskData);
  }

  onCancelClick(): void {
    // Close the dialog without saving
    this.dialogRef.close();
  }
}
