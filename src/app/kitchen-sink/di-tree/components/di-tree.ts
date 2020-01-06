import { Component } from '@angular/core';

import { Service1 } from '../services/service1';

@Component({
  selector: 'di-tree',
  template: `
    <p class="link blue">
      DI App
    </p>
    <p>{{ service1Value }}</p>
    <div class="pl4">
      <component1></component1>
      <component2></component2>
    </div>
  `
})
export class DITreeComponent {
  service1Value: string;

  constructor(private s1: Service1) {
    this.service1Value = s1.value;
  }
}
