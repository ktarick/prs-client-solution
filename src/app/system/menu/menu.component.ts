import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu[] = [
    new Menu('PRS', '/home', 'Purchase Request System'),
    new Menu('Users', '/user/list', 'List of Users'),
    new Menu('Vendors', '/vendors/list', 'List of Vendors'),
    new Menu('Products', '/products/list', 'List of Products'),
    new Menu('Requests', '/request/list', 'Active Requests'),
    new Menu('Review', '/review/request/list', 'Review Active Requests'),
    new Menu('About', '/about', 'About PRS'),
    new Menu('Login', '/login', 'User Login'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
