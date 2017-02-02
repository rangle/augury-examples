import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-model-form',
  templateUrl: './login-model-form.component.html',
  styleUrls: ['./login-model-form.component.css']
})
export class LoginModelFormComponent implements OnInit {

  username = "Shivaji";
  password = "ReadySetGo";
  remember = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
  }

}
