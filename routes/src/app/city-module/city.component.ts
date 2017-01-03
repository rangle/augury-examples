import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  template: `
    <h1>Cities</h1>
    <a [routerLink]="{outlets: {city: ['city1']}}">City 1</a>
    <a [routerLink]="{outlets: {city: ['city2']}}">City 2</a>
    <a [routerLink]="{outlets: {city: ['city3']}}">City 3</a>
    <router-outlet name="city"><router-outlet>
  `,
  styles: []
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
