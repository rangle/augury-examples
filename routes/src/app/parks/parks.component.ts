import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks',
  template: `
  <h1>National Parks</h1>
  <img src="../../assets/camera.svg" width="20" height="20"> <a [routerLink]="{outlets: { parkit: ['park1']}}">Park 1</a>
  <a [routerLink]="{outlets: { parkit: ['park2']}}">Park 2</a>
  <a [routerLink]="{outlets: { parkit: ['park3']}}">Park 3</a>
  <router-outlet name="parkit"></router-outlet>
  `,
  styles: []
})
export class ParksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
