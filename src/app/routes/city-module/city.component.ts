import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  template: `
    <div class="ph3">
    <h1>Cities</h1>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg" routerLink="city1" routerLinkActive="active">City One</a>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg" routerLink="city2" routerLinkActive="active">City Two</a>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg" routerLink="city3" routerLinkActive="active">City Three</a>
   </div>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
