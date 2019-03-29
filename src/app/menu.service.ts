import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { of } from 'rxjs/internal/observable/of';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Menu = {
    apple: { title: 'apple', price: 1, img: 'assets/img/apple-1589869_640.jpg' },
    banana: { title: 'banana', price: 2, img: 'assets/img/banana.jpg' },
    mango: { title: 'mango', price: 3, img: 'assets/img/apple-1589869_640.jpg' },
    avocado: { title: 'avocado', price: 4, img: 'assets/img/apple-1589869_640.jpg' },
    blueberries: { title: 'blueberries', price: 5, img: 'assets/img/apple-1589869_640.jpg' },

  };
  constructor() { }

  getMenuData() {
    return from(Promise.resolve(this.menu));
  }
}

