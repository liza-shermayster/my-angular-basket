import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasketService } from '../basket.service';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../order';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  menu;
  total = 0;
  user;
  email;
  name;
  creator;


  constructor(private basketService: BasketService, private auth: AuthService, private http: HttpClient) {
    this.basketService.getBasketData().subscribe((data) => {
      this.menu = data;
    });

    this.basketService.getTotalPrice().subscribe(total => {
      this.total = total;
    });
    // this.basketService.getTotalPrice().subscribe((data) => {
    //   this.total = data;
    // });
    this.auth.getUserData().subscribe((email: string) => {
      if (email) {
        console.log('data order user', email);
        this.email = email;
        this.name = email.substring(0, email.indexOf("@"));
      }
    });
  }
  createOrder() {
    const order = this.getOrderData();
    this.http.post('http://localhost:3000/api/order/order', order).subscribe((res) => {
      console.log('order created!', res);

    }, err => {
      console.log('order not created', err);
    });
  }

  getOrderData(): Order {
    return {
      user: this.email,
      menuItems: this.menu.filter(item => item.amount > 0),
      total: this.total,
    };
  }

}
