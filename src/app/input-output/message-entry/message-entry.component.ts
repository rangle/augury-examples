import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-entry',
  templateUrl: './message-entry.component.html',
  styles: [`
    .input {
      margin-bottom: 0;
      margin-right: 1em;
    }
  `]
})
export class MessageEntryComponent {
  @Output() messageEvent = new EventEmitter<string>();

  onSend(data) {
    this.messageEvent.emit(data.message);
  }
}
