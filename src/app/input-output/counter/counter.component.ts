import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Count: {{ count }}</h3>
    <button (click)="onDecrement()" class="f6 link dim br4 ph3 pv2 mb2 dib black btn-bg">
      -
    </button>
    <button (click)="onIncrement()" class="f6 link dim br4 ph3 pv2 mb2 dib black btn-bg">
      +
    </button>
  `,
  styles: []
})
export class CounterComponent {

  @Input() count = 0;
  @Output() countEvent: EventEmitter<number> = new EventEmitter<number>();

  onIncrement() {
    this.count++;
    this.countEvent.emit(this.count);
  }

  onDecrement() {
    this.count--;
    this.countEvent.emit(this.count);
  }
}
