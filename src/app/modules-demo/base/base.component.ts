import { Component } from '@angular/core';
import { NavItem } from 'src/app/shared/nav-item';

@Component({
  selector: 'app-modules-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  navModel: NavItem[] = [
    {
      title: 'Augury NgModule Demo',
      defaultStyle: true,
      headerOnly: true
    }
  ];
}
