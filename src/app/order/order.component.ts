import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasketService } from '../basket.service';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../order';
import { isNgTemplate } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  menu;
  total = 0;
  user = false;
  email;
  name;
  creator;
  isPayed = false;





  constructor(private basketService: BasketService, private auth: AuthService, private http: HttpClient, private router: Router) {
    this.basketService.getBasketData().subscribe((data) => {
      this.menu = data;
    });

    this.basketService.getTotalPrice().subscribe(total => {
      this.total = total;
    });
    // this.basketService.getTotalPrice().subscribe((data) => {
    //   this.total = data;
    // });
    // this.auth.getTokenSubject().subscribe((token: string) => {
    //   console.log('token order', token)
    //   this.token = token;
    // });

    this.auth.getUserData().subscribe((email: string) => {
      if (email) {
        console.log('data order user', email);
        this.email = email;
        this.name = email.substring(0, email.indexOf("@"));
        console.log(this.name);

      }
    });
  }
  createOrder() {
    const order = this.getOrderData();
    this.http.post('http://localhost:3000/api/order/order', order).subscribe((res) => {
      console.log('order created!', res);
      this.isPayed = true;
      // this.router.navigate(['/menu']);
      this.basketService.resetOrder();


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
