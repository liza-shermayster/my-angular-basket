import { Injectable } from '@angular/core';
import { Basket, BasketItem, MenuItem } from './menu';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { element } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

interface MenuResponse {
  message: string;
  menuItems: MenuItem[];
}
@Injectable({
  providedIn: 'root'
})
export class BasketService {
  menuData = [] as MenuItem[];
  basketSubject = new BehaviorSubject<MenuItem[]>(this.menuData);

  transformResponseToMenuItems = (data: MenuResponse): MenuItem[] => {
    return data.menuItems;
  }

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/api/menu')
      .pipe(
        map(this.transformResponseToMenuItems)
      )
      .subscribe((menuItems: MenuItem[]) => {
        this.menuData = menuItems;

        this.basketSubject.next([...this.menuData]);
      });
  }

  getBasketData() {
    return this.basketSubject.asObservable();
  }


  updateBasket(item) {
    const newBasketItem = item;
    for (const x of this.menuData) {
      if (x._id === newBasketItem._id) {
        console.log('menu item id', x._id);
        x.amount = newBasketItem.amount;
        console.log('menu item amount', x.amount);
      }
    }
    this.basketSubject.next([...this.menuData]);
  }


  getTotalPrice(): Observable<number> {
    return this.basketSubject.pipe(map((this.getTotalFromMenuItems)));
  }

  getTotalFromMenuItems(menu: MenuItem[]): number {

    console.log('obj service', menu);
    let total = 0;

    for (const x of menu) {
      if (x.amount) {
        total += x.amount * x.price;
        console.log('price', x.price)
      }
    }
    console.log('total', total);

    return total;
  }
}
