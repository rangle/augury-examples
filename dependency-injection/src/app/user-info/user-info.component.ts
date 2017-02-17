import { Component } from '@angular/core';
import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-user-info',
  template: `
    <div *ngIf="userInfo">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 ba" cellspacing="0">
          <thead>
            <tr class="stripe-dark">
              <th class="fw6 tl pa2 ba bg-white">Name</th>
              <th class="fw6 tl pa2 ba bg-white">Surname</th>
              <th class="fw6 tl pa2 ba bg-white">Email</th>
              <th class="fw6 tl pa2 ba bg-white">Password</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa2 ba">{{userInfo.name}}</td>
              <td class="pa2 ba">{{userInfo.surname}}</td>
              <td class="pa2 ba">{{userInfo.email}}</td>
              <td class="pa2 ba">{{userInfo.password}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: []
})
export class UserInfoComponent {

  userInfo;

  constructor( private newUserService: NewUserService ) {
    this.newUserService.getStream().subscribe(
      data => this.userInfo = data
    );
  }

}
