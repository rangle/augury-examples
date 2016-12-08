import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class NewUserService {

  user;

  @Output() newAccount = new EventEmitter<any>();

  registerNewUser(data: any) {
    this.user = data;
    this.newAccount.emit(data);
    console.log(JSON.stringify(data));
  }
}
