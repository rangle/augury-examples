import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="pa2">
    <div class="ba br4 p2 pl3 mb3 bg-purple white">
      <h1>{{title}}</h1>
    </div>
    <div class="center">
      <app-form-new-user></app-form-new-user>
    </div>
    <div class="pt3">
      <app-user-info></app-user-info>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Augury Dependency Injection Demo';
}
