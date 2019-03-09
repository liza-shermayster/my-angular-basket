import { Component, OnInit } from '@angular/core';
import { BasketItem, Basket } from '../menu';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor() { }
  basket: Basket = {
    apple: { title: 'apple', price: 1, amount: 0 },
    banana: { title: 'banana', price: 2, amount: 0 },
    mango: { title: 'mango', price: 3, amount: 0 },
    avocado: { title: 'avocado', price: 4, amount: 0 },
    blueberries: { title: 'blueberries', price: 5, amount: 0 },

  };
  addItemToBasket(menuItemKey, amount) {
    console.log(menuItemKey, ":", amount);
  }
}
