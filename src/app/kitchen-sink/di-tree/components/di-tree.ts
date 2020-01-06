import { Component } from '@angular/core';

import { Service1 } from '../services/service1';

@Component({
  selector: 'di-tree',
  template: `
    <p class="link blue">
      DI App
    </p>
    <p class="pl2">{{ service1Value }}</p>
    <br />
    <component1></component1>
    <br />
    <component2></component2>
  `
})
export class DITreeComponent {
  service1Value: string;

  constructor(private s1: Service1) {
    this.service1Value = s1.value;
  }
}
