import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { of } from 'rxjs/internal/observable/of';
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Menu = {
    apple: { title: 'apple', price: 1 },
    banana: { title: 'banana', price: 2 },
    mango: { title: 'mango', price: 3 },
    avocado: { title: 'avocado', price: 4 },
    blueberries: { title: 'blueberries', price: 5 },
  };
  constructor() { }

  getMenuData() {
    return from(Promise.resolve(this.menu));
  }
}

