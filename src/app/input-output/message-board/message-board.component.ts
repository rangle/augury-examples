import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-board',
  template: `
  <section class="pr2">
    <article class="mw8 center br2 ba b--transparent dark-amber-bg">
    <h1 class="pa3">{{message}}</h1>
    </article>
  </section>
  `,
  styles: []
})
export class MessageBoardComponent {
  @Input() message: string;
}
