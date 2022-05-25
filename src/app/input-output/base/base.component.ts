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
  count: number = 0;

  @Input() message = 'Jumbo Shrimp!';

  onCountEvent(data: any) {
    this.count = data;
  }

  onMessageEvent(data: any) {
    this.message = data;
    console.log(data);
  }
}
