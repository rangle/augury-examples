import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent {
  form: FormGroup;

  get emailsControls(): FormArray {
    return this.form.get('emails') as FormArray;
  }

  set emailsControls(formArray: FormArray) {
    this.form.setControl('emails', formArray);
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      emails: this.formBuilder.array([]),
    });
  }

  addEmail() {
    this.emailsControls.push(new FormControl(''));
  }

  save() {
    console.log(this.form.value);
  }

  reset() {
    this.emailsControls = this.formBuilder.array([]);
    this.form.reset();
  }

}
