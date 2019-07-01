import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from '../menu';
import { BasketService } from '../basket.service';
import { del } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { Order } from '../order';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  menu: MenuItem[];
  total;
  user = false;
  email;
  name;
  creator;
  isPayed = false;
  constructor(private basketService: BasketService, private auth: AuthService, private http: HttpClient, private router: Router) {
    this.basketService.getBasketData().subscribe((data) => {
      console.log('data from basket com', data);
      this.menu = data;

    });

    this.total = this.basketService.getTotalPrice();

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

  addItemToBasket(item, amount) {

    for (const x of this.menu) {

      if (item._id === x._id) {
        x.amount = amount;
      }
    }
    console.log('this menu', this.menu);
    this.basketService.updateBasket(this.menu);

  }
}
