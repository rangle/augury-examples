import { Component, Input } from '@angular/core';
import { NavItem } from 'src/app/shared/nav-item';

@Component({
  selector: 'app-io-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  navModel: NavItem[] = [
    {
      title: 'Augury Input Output Demo',
      defaultStyle: true,
      headerOnly: true
    }
  ];
  count: number;

  @Input() message = 'Jumbo Shrimp!';

  onCountEvent(data) {
    this.count = data;
  }

  onMessageEvent(data) {
    this.message = data;
    console.log(data);
  }
}
