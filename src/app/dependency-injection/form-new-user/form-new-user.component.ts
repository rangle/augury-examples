import { Component } from '@angular/core';
import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styles: [`
  button[disabled] {
    color: gray;
  }
  `]
})
export class FormNewUserComponent {

  constructor(private newUserService: NewUserService) {
  }

  onSubmit(data) {
    this.newUserService.registerNewUser(data);
  }

}
