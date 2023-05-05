import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss'],
})
export class AddTaskDialogComponent implements OnInit {
  taskDetails: FormGroup = new FormGroup({
    title: new FormControl('', Validators.maxLength(15)),
    description: new FormControl('', Validators.maxLength(30)),
  });

  constructor() {}

  ngOnInit(): void {}
}
