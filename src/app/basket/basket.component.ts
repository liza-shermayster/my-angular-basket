import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasketItem, Basket, MenuItem } from '../menu';
import { BasketService } from '../basket.service';
import { del } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  menu: MenuItem[];
  total;
  router;
  constructor(private basketService: BasketService) {
    this.basketService.getBasketData().subscribe((data) => {
      console.log('data from basket com', data);
      this.menu = data;

    });

    this.total = this.basketService.getTotalPrice();
  }

  addItemToBasket(item, amount) {
    console.log('amount item from menu com', amount);
    console.log('menu item from menu com', item);
    for (const x of this.menu) {

      if (item._id === x._id) {
        x.amount = amount;
      }
    }
    console.log('this menu', this.menu);
    this.basketService.updateBasket(this.menu);
    // this.basketService.updateBasket({ ...item, ...amount });
  }

  /////////////////////////////////////////////////////////////////
  // basket;
  // subs;
  // total;
  // constructor(private basketService: BasketService) {
  //   this.basket = this.basketService.getBasketData().subscribe();
  //   this.total = this.basketService.getTotalPrice();

  // }

  // // addItemToBasket(menuItemKey: string, amount: number, itemValue) {

  // //   console.log(menuItemKey, ':', amount, itemValue);
  // //   this.basketService.updateBasket({ ...itemValue, amount }, menuItemKey);
  // // }
}
