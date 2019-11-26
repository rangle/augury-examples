import { Component } from '@angular/core';
import { NavItem } from 'src/app/shared/nav-item';

@Component({
  selector: 'app-forms-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  navModel: NavItem[] = [
    {
      title: 'Augury Forms Demo',
      defaultStyle: true,
      headerOnly: true
    }
  ];
}
