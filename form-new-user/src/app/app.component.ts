import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="clearfix">
    <h1 class="ba br4 p2 pl3 mb3 bg-purple white">
      {{title}}
    </h1>
    <app-form-new-user></app-form-new-user>
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
