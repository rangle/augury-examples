import { Injectable } from '@angular/core';

export class Service1 {
  value = 'Service One';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}
