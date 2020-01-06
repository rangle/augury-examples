import { Injectable } from '@angular/core';

export class Service3 {
  value = 'Service Three';
  constructor() {
    this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
  }
}
