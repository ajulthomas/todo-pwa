import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/project.interface';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  tasks: Task[] = [
    {
      name: 'UI/UX Design',
      status: 'COMPLETED',
      project: 'ABC Sales App',
    },
    {
      name: 'Design Approval',
      status: 'IN_PROGRESS',
      project: 'ABC Sales App',
    },
    {
      name: 'Resource Gathering',
      status: 'TODO',
      project: 'ABC Sales App',
    },
    {
      name: 'UI Development - Phase 1',
      status: 'TODO',
      project: 'ABC Sales App',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
