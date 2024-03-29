import {Component} from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'change-detection',
  template: `
  <div>
    <button type="button" class="btn btn-danger"
      (click)="reset()">
      Reset
    </button>

    <button type="button" class="btn btn-primary"
      (click)="makeUserOnline(0)">
      Make User Online (mutable)
    </button>

    <button type="button" class="btn btn-success"
      (click)="makeUserOnline(1)">
      Make User Online (immutable)
    </button>

    <user-info-default [user]="user">
    </user-info-default>

    <user-info-push [user]="user">
    </user-info-push>

  </div>
  `
})
export default class ChangeDetectionComponent {
  user = new User(1, 'John Doe', 'john@doe.com');

  reset() {
    this.user = new User(1, 'John Doe', 'john@doe.com');
  }

  makeUserOnline(type: number) {
    if (type === 0) {
      this.user.isOnline = true;
    } else if (type === 1) {
      this.user = Object.assign({}, this.user, {isOnline: true});
    }
  }
}
