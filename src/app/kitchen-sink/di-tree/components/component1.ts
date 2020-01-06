import { Component, Inject } from '@angular/core';

import { Service3 } from '../services/service3';

@Component({
  selector: 'component1',
  template: `
    <p class="link blue">Component One</p>
    <p class="pl2">{{ service3Value }}</p>
    <br />
    <component3></component3>
    <br />
    <component4></component4>
  `
})
export class Component1 {
  service3Value: string;

  constructor(private s3: Service3) {
    this.service3Value = s3.value;
  }
}
