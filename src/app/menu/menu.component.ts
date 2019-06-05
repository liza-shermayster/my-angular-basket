import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu';
import { MenuService } from '../menu.service';
import { BasketService } from '../basket.service';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: MenuItem[];
  searchValue = '';
  total;
  addAmount;

  constructor(private basketService: BasketService) {
    this.basketService.getBasketData().subscribe((data) => {

      this.menu = data;
    });

    this.total = this.basketService.getTotalPrice();
  }

  addItemToBasket(item, amount) {
    this.basketService.updateBasket({ ...item, amount });

    // console.log('amount item from menu com', amount);
    // console.log('menu item from menu com', item);
    // for (const x of this.menu) {
    //   if (item._id === x._id) {
    //     x.amount = amount;
    //   }
    // }
    // console.log('this menu', this.menu);
    // this.basketService.updateBasket(this.menu);
    // this.basketService.updateBasket({ ...item, ...amount });
  }



}
