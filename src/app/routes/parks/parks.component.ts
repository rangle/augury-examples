import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks',
  template: `
    <div class="ph3">
      <h1>National Parks</h1>
      <a
        class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg"
        [routerLink]="[{ outlets: { parkit: ['park1'] } }]"
        routerLinkActive="active"
        >Park 1</a
      >
      <a
        class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg"
        [routerLink]="[{ outlets: { parkit: ['park2'] } }]"
        routerLinkActive="active"
        >Park 2</a
      >
      <a
        class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg"
        [routerLink]="[{ outlets: { parkit: ['park3'] } }]"
        routerLinkActive="active"
        >Park 3</a
      >
    </div>
    <router-outlet name="parkit"></router-outlet>
  `,
  styles: []
})
export class ParksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
