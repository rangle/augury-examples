import { Component, Inject, forwardRef } from '@angular/core';

import { Service1 } from '../services/service1';
import { Service3 } from '../services/service3';

@Component({
  selector: 'component3',
  template: `
    <p class="link blue">Component Three</p>
    <p>{{ service1Value }}</p>
    <p>{{ service3Value }}</p>
  `
})
export class Component3 {
  service1Value: string;
  service3Value: string;

  constructor(private s1: Service1, @Inject(forwardRef(() => Service3)) private s3: Service3) {
    this.service1Value = s1.value;
    this.service3Value = s3.value;
  }
}
