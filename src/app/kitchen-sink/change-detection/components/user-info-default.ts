import {Component, Input, ChangeDetectionStrategy}
  from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'user-info-default',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: [`
    .bg {
      background-color: red;
    }
  `],
  template: `
    <div [ngClass]="{'bg' : user.isOnline}">
      <h4>User Info Default</h4>
      <p>
        <label>User Id: {{user.id}} {{user.isOnline}}</label>
      </p>
    </div>`
})
export class UserInfoDefault {
  @Input() user: User = {
    id: 0,
    email: '',
    isOnline: false,
    name: ''
  };
}
