import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  template: `
    <h1>Cities</h1>
    <img src="https://augury.angular.io/images/camera.svg" width="20" height="20" align="center"> <a routerLink="city1" routerLinkActive="active">City 1</a>
    <a routerLink="city2" routerLinkActive="active">City 2</a>
    <a routerLink="city3" routerLinkActive="active">City 3</a>
    <router-outlet><router-outlet>
  `,
  styles: [`
    a.active {
      background-color: yellow;
    }
  `]
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
