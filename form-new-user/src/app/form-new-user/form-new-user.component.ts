import { Component } from '@angular/core';
import { NewUserService } from '../new-user.service';

@Component({
  selector: 'app-form-new-user',
  template: `
    <form #formRef="ngForm">
      <div class="dt dt--fixed w-50">

        <div class="dt dt--fixed">
          <label for="name" class="fl w-20 tr pr2 mb2 ">Name:</label>
          <input type="text" id="name" name="name" ngModel required class="fl w-25 mb2" />
          <label for="surname" class="fl w-20 tr pr2 mb2">Surname:</label>
          <input type="text" id="surname" name="surname" ngModel required class="fl w-25 mb2" />
        </div>

        <div class="dt dt--fixed">
          <label for="email" class="fl w-20 tr pr2 mb2">Email:</label>
          <input type="text" id="email" name="email" ngModel required class="fl w-25 mb2" />
        </div>

        <div class="dt dt--fixed">
          <label for="password" class="fl w-20 tr pr2 mb2">Password:</label>
          <input type="password" id="password" name="password" ngModel required class="fl w-25 mb2"/>
          <label for="surname" class="fl w-20 tr pr2 mb2">&nbsp;</label>
          <button (click)="onSubmit(formRef.value)" [disabled]="!formRef.valid" class="fl w-25">Create</button>
        </div>

      </div>

    </form>
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
