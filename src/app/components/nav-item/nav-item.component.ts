import { Component, Input, OnInit } from '@angular/core';
import { RippleAnimationConfig } from '@angular/material/core/ripple';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input() navItem: NavItem = { name: '', icon: '', route: '' };
  constructor() {}
  matRippleAnimationConfig: RippleAnimationConfig = {
    enterDuration: 400,
    exitDuration: 100,
  };
  ngOnInit(): void {}
}

export interface NavItem {
  name: string;
  icon: string;
  route?: string;
}
