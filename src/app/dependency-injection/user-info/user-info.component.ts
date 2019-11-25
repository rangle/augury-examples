import { Component } from '@angular/core';
import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [`
  .stripe-purple:nth-child(odd) {
    background-color: rgba(164, 99, 242, 0.1);
  }
  `]
})
export class UserInfoComponent {

  userInfo;

  constructor(private newUserService: NewUserService) {
    this.newUserService.getStream().subscribe(
      data => this.userInfo = data
    );
  }

}
