import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="clearfix">
    <h1 class="round-title">
      {{title}}
    </h1>
    <app-form-new-user></app-form-new-user>
  </div>
  <div>
    <app-user-info></app-user-info>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form: New User';
}
