import { Injectable } from '@angular/core';

@Injectable()
export class Service2 {
  value = 'Service Two';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}
