import { Injectable } from '@angular/core';
import { Basket, BasketItem } from './menu';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';
import { MenuService } from './menu.service';



@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketSubject = new BehaviorSubject<Basket>(null);

  constructor(private menuService: MenuService) {
    this.menuService.getMenuData().subscribe((value: Basket) => {
      this.basketSubject.next(value);
    });
  }

  getBasketData() {
    return this.basketSubject;
  }

  updateBasket(item: BasketItem, basketKey: string) {
    const newBasketItem = this.getNewBasketItem(item, basketKey);
    const currentBasket = this.basketSubject.value;
    const updatedBasket = { ...currentBasket, ...newBasketItem };

    this.basketSubject.next(updatedBasket);
  }

  getNewBasketItem(item: BasketItem, basketKey: string) {
    const newBasketItem = {};
    newBasketItem[basketKey] = item;
    return newBasketItem;
  }

  getTotalPrice() {
    return this.basketSubject.pipe(map((this.getTotal)));
  }

  getTotal(obj) {
    let total = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        if (element.amount) {
          total = total + element.amount * element.price;
        }
      }
    }
    return total;
  }
}
