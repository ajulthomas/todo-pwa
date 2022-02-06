import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName = 'Allen';

  tasksSummary = [
    {
      status: 'Total Tasks',
      icon: 'reorder',
      count: 900,
    },
    {
      status: 'Completed Tasks',
      icon: 'check_circle_outline_rounded',
      count: 200,
    },
    {
      status: 'Pending Tasks',
      icon: 'pending_actions_rounded',
      count: 600,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
