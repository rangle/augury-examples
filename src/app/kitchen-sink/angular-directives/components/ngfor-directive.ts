import {Component} from '@angular/core';

@Component({
  selector: 'ngfor-directive',
  template: `
  <div>
     <hello-directives *ngFor="let name of names" [msg]="'Hello from ' + name">
     </hello-directives>
  </div>
  `
})
export default class NgForDirective {
  names = [
    'John',
    'Sam',
    'Mike',
    'Sumit',
    'Igor'
  ];
}
