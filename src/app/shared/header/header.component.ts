import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() navItems: NavItem[];

  constructor() { }

  ngOnInit() {
  }

}
