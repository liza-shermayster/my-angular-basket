import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';
import { MenuItem } from './menu';
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
    this.http.get('menu')
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
        x.amount = newBasketItem.amount;
      }
    }
    this.basketSubject.next([...this.menuData]);
  }


  getTotalPrice(): Observable<number> {
    return this.basketSubject.pipe(map((this.getTotalFromMenuItems)));
  }

  getTotalFromMenuItems(menu: MenuItem[]): number {

    let total = 0;

    for (const x of menu) {
      if (x.amount) {
        total += x.amount * x.price;
      }
    }
    return total;
  }
  resetOrder() {
    this.menuData.map(menuItem => menuItem.amount = 0);
    this.basketSubject.next([...this.menuData]);
  }
}
