import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Home</h2>
    <p>This demo application makes use of routes and lazy loaded child routes.</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
