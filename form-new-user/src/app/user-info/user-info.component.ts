import { Component } from '@angular/core';
import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-user-info',
  template: `
    <div *ngIf="userInfo">
      <div>Name: {{userInfo.name}}</div>
      <div>Surname: {{userInfo.surname}}</div>
      <div>Email: {{userInfo.email}}</div>
      <div>Password: {{userInfo.password}}</div>
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
