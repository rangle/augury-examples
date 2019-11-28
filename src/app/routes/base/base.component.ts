import { Component } from '@angular/core';
import { NavItem } from 'src/app/shared/nav-item';

@Component({
  selector: 'app-routes-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  navModel: NavItem[] = [
    {
      title: 'Augury Routes Demo',
      defaultStyle: true,
      headerOnly: false,
      routerLinkPath: 'home'
    },
    {
      title: 'Home',
      routerLinkPath: 'home',
      defaultStyle: true,
      isNavItem: true
    },
    {
      title: 'Parks',
      routerLinkPath: 'parks',
      defaultStyle: true,
      isNavItem: true
    },
    {
      title: 'Cities',
      routerLinkPath: 'cities',
      defaultStyle: true,
      isNavItem: true
    }
  ];

  title = 'Angular Routes Demo';

  constructor() {}
}
