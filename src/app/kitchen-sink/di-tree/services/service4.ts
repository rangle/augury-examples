import { Injectable } from '@angular/core';

export class Service4 {
  value = 'Service Four';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}
