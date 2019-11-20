import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NewUserService {

  subject: Subject<any>;

  constructor() {
    this.subject = new Subject<any>();
  }

  registerNewUser(data: any) {
    this.subject.next(data);
  }

  getStream() {
    return this.subject;
  }

}
