import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-io-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  title = 'Augury Input Output Demo';
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
