import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-one',
  template: `
  <div>
    <img src="https://augury.angular.io/images/toronto.jpg"/>
  </div>
  `,
  styles: []
})
export class CityOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
