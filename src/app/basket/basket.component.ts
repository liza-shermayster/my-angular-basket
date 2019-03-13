import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasketItem, Basket } from '../menu';
import { BasketService } from '../basket.service';

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

  addItemToBasket(menuItemKey, amount, itemValue) {
    console.log(menuItemKey, ':', amount, itemValue);
  }
}
