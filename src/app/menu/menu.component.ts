import { Component, OnInit } from '@angular/core';
import { Menu, Basket, MenuItem } from '../menu';
import { MenuService } from '../menu.service';
import { pipe, Observable } from 'rxjs';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: Observable<Menu>;

  constructor(private menuService: MenuService, private basketService: BasketService) {
    this.menu = this.menuService.getMenuData();
  }

  addItemToBasket(menuItem: MenuItem, amount: number, menuItemKey: string) {
    console.log(menuItemKey, ':', amount);
    this.basketService.updateBasket({ ...menuItem, amount }, menuItemKey);
  }
  addBasket() {

  }
  // addItemToBasket(key: string, amount = 1): any {
  //   if(amount === 0) {
  //     delete this.myBasket[key];
  //   }
  //   this.myBasket[key] = { ...this.menu[key], amount };
  //   console.log(this.myBasket);

  // }

}
