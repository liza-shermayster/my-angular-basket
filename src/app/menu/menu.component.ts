import { Component, OnInit } from '@angular/core';
import { Menu, Basket, MenuItem } from '../menu';
import { MenuService } from '../menu.service';
import { pipe, Observable, BehaviorSubject } from 'rxjs';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: Observable<Menu>;
  basketSubj: BehaviorSubject<Basket>;
  searchValue = '';

  constructor(private menuService: MenuService, private basketService: BasketService) {
    this.basketSubj = this.basketService.getBasketData();
    this.menuService.getMenuData().subscribe((value) => {
      if (!this.basketSubj.value) {
        this.basketSubj.next(value);

      }
    });
  }

  addItemToBasket(menuItem: MenuItem, amount: number, menuItemKey: string) {
    console.log(menuItemKey, ':', amount);
    this.basketService.updateBasket({ ...menuItem, amount }, menuItemKey);
  }



  // addBasket() {

  // }
  // addItemToBasket(key: string, amount = 1): any {
  //   if(amount === 0) {
  //     delete this.myBasket[key];
  //   }
  //   this.myBasket[key] = { ...this.menu[key], amount };
  //   console.log(this.myBasket);

  // }

}
