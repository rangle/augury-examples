import { Component, Inject } from '@angular/core';

import { Service2 } from '../services/service2';

@Component({
  selector: 'component2',
  template: `
    <p class="link blue">
      Component Two
    </p>
    <p class="pl2">{{ service2Value }}</p>
    <br />
    <component5></component5>
    <br />
    <component6></component6>
  `
})
export class Component2 {
  service2Value: string;

  constructor(private s2: Service2) {
    this.service2Value = s2.value;
  }
}
