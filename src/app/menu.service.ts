import { Injectable } from '@angular/core';
import { Menu, Basket } from './menu';
import { of } from 'rxjs/internal/observable/of';
import { from } from 'rxjs/internal/observable/from';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // menu: Menu = {
  //   apple: { title: 'apple', price: 1, img: 'assets/img/apple-1589869_640.jpg' },
  //   banana: { title: 'banana', price: 2, img: 'assets/img/banana.jpg' },
  //   mango: { title: 'mango', price: 3, img: 'assets/img/apple-1589869_640.jpg' },
  //   avocado: { title: 'avocado', price: 4, img: 'assets/img/apple-1589869_640.jpg' },
  //   blueberries: { title: 'blueberries', price: 5, img: 'assets/img/apple-1589869_640.jpg' },

  // };
  constructor(private htttp: HttpClient) { }

  getMenuData() {
    return this.htttp.get('http://localhost:3000/api/menu');
  }
}

