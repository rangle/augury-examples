import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-one',
  template: `
  <div>
    <img src="assets/toronto.jpg"/>
  </div>
  `,
  styles: []
})
export class CityOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
