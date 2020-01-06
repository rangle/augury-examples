import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: `
    <form (submit)="onSubmit()" novalidate>
      <div class="flex pa2">
        <label for="email" class="w-third">Email:</label>
        <input class="ba pa2 w-50" type="email" id="email" [formControl]="email" />
      </div>

      <div class="flex pa2">
        <label for="password" class="w-third">Password:</label>
        <input class="ba pa2 w-50" type="password" id="password" [formControl]="password" />
      </div>
      <br />
      <div class="flex pa2">
        <label class="w-third"></label>
        <button class="br4 pt2 pb2 pl4 pr4 white bg-dark-green bn" type="submit">Register</button>
      </div>
    </form>
  `
})
export class MyFormComponent {
  private email: FormControl = new FormControl();
  private password: FormControl = new FormControl();
  onSubmit() {
    console.log(this.email, this.password);
  }
}
