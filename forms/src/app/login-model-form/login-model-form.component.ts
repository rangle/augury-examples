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

  onSubmit() {
    console.log({userid: this.username, password: this.password, remember: this.remember});
  }

}
