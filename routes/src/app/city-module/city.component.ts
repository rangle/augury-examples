import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  template: `
    <h1>Cities</h1>
    <a routerLink="city1">City 1</a>
    <a routerLink="city2">City 2</a>
    <a routerLink="city3">City 3</a>
    <router-outlet><router-outlet>
  `,
  styles: []
})
export class CityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
