import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks',
  template: `
  <h1>National Parks</h1>
  <img src="/images/camera.svg" width="20" height="20" align="center"> <a [routerLink]="{outlets: { parkit: ['park1']}}" routerLinkActive="active">Park 1</a>
  <a [routerLink]="{outlets: { parkit: ['park2']}}" routerLinkActive="active">Park 2</a>
  <a [routerLink]="{outlets: { parkit: ['park3']}}" routerLinkActive="active">Park 3</a>
  <router-outlet name="parkit"></router-outlet>
  `,
  styles: [`
    a.active {
      background-color: yellow;
    }
  `]
})
export class ParksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
