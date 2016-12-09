import { Component } from '@angular/core';
import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-form-new-user',
  template: `
    <form #formRef="ngForm">
      <div>
        <label for="name">Name:</label>
        <input type="test" name="name" id="name" ngModel required />
        <label for="usrname">Surname:</label>
        <input type="text" id="surname" name="surname" ngModel required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" ngModel required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" ngModel required />
      </div>
        <button (click)="onSubmit(formRef.value)" [disabled]="!formRef.valid">Create</button>
    </form>
    <div>
      Debug: {{formRef.value | json}}
    </div>
  `,
  styles: []
})
export class FormNewUserComponent {

  constructor( private newUserService: NewUserService ) {
  }

  onSubmit(data) {
    this.newUserService.registerNewUser(data);
  }

}
