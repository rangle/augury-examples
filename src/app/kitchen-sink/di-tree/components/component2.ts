import { Component, Inject } from '@angular/core';

import { Service2 } from '../services/service2';

@Component({
  selector: 'component2',
  template: `
    <p class="link blue">
      Component Two
    </p>
    <p>{{ service2Value }}</p>
    <div class="pl4">
      <component5></component5>
      <component6></component6>
    </div>
  `
})
export class Component2 {
  service2Value: string;

  constructor(private s2: Service2) {
    this.service2Value = s2.value;
  }
}
