import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from 'src/assets/icons/app.icons';
import { NavItem } from './components/nav-item/nav-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    for (const icon in ICONS) {
      matIconRegistry.addSvgIconLiteral(
        `${icon}`,
        sanitizer.bypassSecurityTrustHtml(ICONS[icon])
      );
    }
  }
  sideMenu: NavItem[] = [
    {
      name: 'Dashboard',
      icon: 'home',
      route: '/dashboard',
    },
    {
      name: 'Stats View',
      icon: 'stats',
      route: '/stats',
    },
    {
      name: 'Progress View',
      icon: 'progress',
      route: '/progress',
    },
    {
      name: 'Project View',
      icon: 'folder',
    },
  ];
  profileMenu: NavItem[] = [
    {
      name: 'Settings',
      icon: 'settings',
    },
    {
      name: 'Log out',
      icon: 'logout',
    },
  ];
}
