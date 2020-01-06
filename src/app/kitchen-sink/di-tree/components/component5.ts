import { Component, Inject } from '@angular/core';

import { Service3 } from '../services/service3';
import { Service4 } from '../services/service4';

@Component({
  selector: 'component5',
  providers: [Service3, Service4],
  template: `
    <p class="link blue">Component Five</p>
    <p>{{ service3Value }}</p>
    <p>{{ service4Value }}</p>
  `
})
export class Component5 {
  service3Value: string;
  service4Value: string;

  constructor(private s3: Service3, private s4: Service4) {
    this.service3Value = s3.value;
    this.service4Value = s4.value;
  }
}
