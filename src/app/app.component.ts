import { Component } from '@angular/core';
import { addAllToArray } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  fruits = [
    { title: 'apple', price: 1 },
    { title: 'banana', price: 2 },
    { title: 'mango', price: 5 }
  ];
  basket: string;
  total = 0;
  countBasket = [];
  totalPrice = 0;
  amount = 0;
  myTotalPriceItem = [
    { tile: 'apple', price: 1, count: 2 },
    { tile: 'banana', price: 3, count: 4 },
    { tile: 'mango', price: 5, count: 6 }
  ];
  test = { title: 'apple', count: '2', price: '3' };

  getDataFun(event) {
    this.total = event.price;
    this.basket = event.title;
    this.countBasket.push(event.title);
    this.amount = this.amount + 1;
    this.totalPrice = this.totalPrice + event.price;
  }

}

