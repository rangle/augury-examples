import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'phone-numbers',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent {
  form;
  currentUser: Array<String> = [];
  placeholders = [
    'Name',
    'Job'
  ];
  output;

  constructor() {
    this.form= new FormArray([
      new FormControl(''),
      new FormControl('')
    ]);
  }

  addEmail() {
    if (this.placeholders.indexOf('Email') === -1) {
      this.form.push(new FormControl(''));
      this.placeholders.push('Email');
    }
  }

  addLocation() {
    if (this.placeholders.indexOf('Location') === -1) {
      this.form.push(new FormControl('', Validators.minLength(5)));
      this.placeholders.push('Location');
    }
  }

  save() {
    this.output = this.form.value;
  }

}
