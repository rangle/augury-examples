import { Component, Inject } from '@angular/core';

import { Service1 } from '../services/service1';
import { Service4 } from '../services/service4';

@Component({
  selector: 'component4',
  template: `
    <p class="link blue">Component Four</p>
    <p>{{ service1Value }}</p>
    <p>{{ service4Value }}</p>
  `
})
export class Component4 {
  service1Value: string;
  service4Value: string;

  constructor(private s1: Service1, @Inject(Service4) private s4) {
    this.service1Value = s1.value;
    this.service4Value = s4.value;
  }
}
