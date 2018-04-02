import {Component} from '@angular/core';


@Component({
  selector: 'prime-ng-test',
  template: `
    <button type="button" pButton (click)="addMessage()" label="PrimeNG">TEST GROWL</button>
    <p-growl [value]="messages" [sticky]='false'></p-growl>
    <p-menu [model]="items"></p-menu>
  `
})
export class PrimeNGComponent {

  messages: any[] = [];
  index: number = 0;
  items:any[] =  [
    {label: 'New', icon: 'fa-plus'},
    {label: 'Open', icon: 'fa-download'},
    {label: 'Undo', icon: 'fa-refresh'}
  ];

  addMessage() {
    let detail: string = (this.index++).toString() + ': PrimeNG rocks';
    this.messages.push({severity:'info', summary:'Info Message', detail: detail});
  }

}
