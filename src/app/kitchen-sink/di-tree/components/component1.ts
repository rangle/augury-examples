import { Component, Inject } from '@angular/core';

import { Service3 } from '../services/service3';

@Component({
  selector: 'component1',
  template: `
    <p class="link blue">Component One</p>
    <p>{{ service3Value }}</p>
    <div class="pl4">
      <component3></component3>
      <component4></component4>
    </div>
  `
})
export class Component1 {
  service3Value: string;

  constructor(private s3: Service3) {
    this.service3Value = s3.value;
  }
}
