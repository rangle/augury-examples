import { Component } from '@angular/core';
import { NavItem } from 'src/app/shared/nav-item';

@Component({
  selector: 'app-di-root',
  template: `
  <app-header [navItems]="navModel"></app-header>
    <div class="pt6 ph3">
      <div class="center">
        <app-form-new-user></app-form-new-user>
      </div>
      <div class="pt3">
        <app-user-info></app-user-info>
      </div>
    </div>
  `,
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  navModel: NavItem[] = [
    {
      title: 'Augury Dependency Injection Demo',
      defaultStyle: true,
      headerOnly: true
    }
  ];
}
