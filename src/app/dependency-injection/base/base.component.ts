import { Component } from '@angular/core';

@Component({
  selector: 'app-di-root',
  template: `
    <header class="bg-purple fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav class="f6 fw6 ttu tracked">
        <a class="link dim amber dib mr3 f3 b" title="{{title}}">{{title}}</a>
      </nav>
    </header>
    <div class="pt6 ph3">
      <div class="center">
        <app-form-new-user></app-form-new-user>
      </div>
      <div class="pt3">
        <app-user-info></app-user-info>
      </div>
    </div>
  `,
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  title = 'Augury Dependency Injection Demo';
}
