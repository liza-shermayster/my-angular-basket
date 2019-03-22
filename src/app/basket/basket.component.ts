import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasketItem, Basket } from '../menu';
import { BasketService } from '../basket.service';
import { del } from 'selenium-webdriver/http';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  basket;
  subs;
  constructor(private basketService: BasketService) {
    this.basket = this.basketService.getBasketData();

  }

  addItemToBasket(menuItemKey: string, amount: number, itemValue) {

    console.log(menuItemKey, ':', amount, itemValue);
    this.basketService.updateBasket({ ...itemValue, amount }, menuItemKey);
  }
}
