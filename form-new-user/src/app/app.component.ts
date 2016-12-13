import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="pa2">
    <div class="ba br4 p2 pl3 mb3 bg-purple white">
      <h1>{{title}}</h1>
    </div>
    <div>
    <app-form-new-user></app-form-new-user>
    </div>

    <div>
      <app-user-info></app-user-info>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form: New User';
}
