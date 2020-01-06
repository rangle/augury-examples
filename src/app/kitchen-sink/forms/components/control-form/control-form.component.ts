import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'control-form',
  template: `
    <div>
      <form (submit)="onSubmit(formGroup.value)">
        <div class="flex pa2">
          <label class="w-third">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            class="ba pa2 w-50"
            [formControl]="formGroup.controls['name']"
          />
        </div>
        <div class="flex pa2">
          <label class="w-third">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            class="ba pa2 w-50"
            [formControl]="formGroup.controls['email']"
          />
        </div>
        <div class="flex pa2">
          <label class="w-third"></label>
          <button type="submit" class="br4 bn pt2 pb2 pl4 pr4 white bg-dark-green">Submit</button>
        </div>
      </form>
    </div>
  `
})
export class ControlFormComponent {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('John Doe'),
      email: new FormControl('johndoe@gmail.com')
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
