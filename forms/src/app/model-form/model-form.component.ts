import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  welcomeMessage: string;
  fg: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.fg = formBuilder.group({
      'name': ['Tammy', Validators.required],
      'surname': ['Trinh', Validators.required],
      'email': ['tam@york.tv', Validators.required],
      'gender': ['female', Validators.required],
      'greeting': ['Greet with message'],
      'welcome': new FormControl({disabled: true})
    });
  }

  ngOnInit() {
  }
/*
  enableWelcomeMessage () {
    this.fg.addControl('message');
    this.welcomeMessage = 'congrats on remembering your password!';
  }
*/
  onSubmit(value) {
    console.log(JSON.stringify(value));
  }

}
