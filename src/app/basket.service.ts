import { Injectable } from '@angular/core';
import { Basket, BasketItem } from './menu';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BasketService {


  basket: Basket = {
  };

  basketSubject = new BehaviorSubject<Basket>(this.basket);

  getBasketData() {
    return this.basketSubject;
  }

  updateBasket(item: BasketItem, basketKey: string) {
    const obj = {};
    console.log('obj', obj);

    obj[basketKey] = item;
    console.log('obj after', obj);

    console.log('basketKey:', basketKey);
    console.log('item :', item);

    const currentValue = this.basketSubject.value;
    console.log('currentValue before update', currentValue);

    this.basketSubject.next({ ...currentValue, ...obj });
    console.log('current after update', this.basketSubject.value);
  }

}
