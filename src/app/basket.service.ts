import { Injectable } from '@angular/core';
import { Basket, BasketItem } from './menu';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class BasketService {






  basketSubject = new BehaviorSubject<Basket>(null);

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

}
