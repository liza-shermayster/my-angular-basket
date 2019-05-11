import { Injectable } from '@angular/core';
import { Basket, BasketItem, MenuItem } from './menu';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { element } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  menuData;
  basketSubject = new BehaviorSubject<MenuItem[]>(null);


  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/menu').pipe(
      map((data: { message: string, menuItems: MenuItem[] }) => {
        return data.menuItems;
      }))
      .subscribe((value: MenuItem[]) => {
        this.menuData = value;
        console.log('menuData-0', value);
        this.basketSubject.next([...this.menuData]);
      });
  }

  getBasketData() {
    console.log('thisBasketSubject', this.basketSubject);
    return this.basketSubject.asObservable();
  }


  updateBasket(item: MenuItem[]) {
    const newBasketItem = item;
    // const currentBasket = this.basketSubject.value;
    // const updatedBasket = { ...currentBasket, ...newBasketItem };

    this.basketSubject.next(newBasketItem);
  }
  /////////////////////////////////////////////////////
  // getNewBasketItem(item: MenuItem[], ) {
  //   const newBasketItem = {};
  //   // newBasketItem[basketKey] = item;
  //   return newBasketItem;
  // }

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
