import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-model-form',
  templateUrl: './login-model-form.component.html',
  styleUrls: ['./login-model-form.component.css']
})
export class LoginModelFormComponent implements OnInit {

  username = 'Shivaji';
  password = 'ReadySetGo';
  remember = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
