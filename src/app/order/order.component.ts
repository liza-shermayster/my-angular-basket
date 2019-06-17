import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
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
export class OrderComponent implements OnInit {
  menu;
  total = 0;
  user = false;
  email;
  name;
  creator;
  isPayed = false;

  @Output() amountChange = new EventEmitter();


  ngOnInit() {
  }


  constructor(private basketService: BasketService, private auth: AuthService, private http: HttpClient, private router: Router) {
    this.basketService.getBasketData().subscribe((data) => {
      this.menu = data;
    });

    this.basketService.getTotalPrice().subscribe(total => {
      this.total = total;
    });


    this.auth.getUserData().subscribe((email: string) => {
      if (email) {
        console.log('data order user', email);
        this.email = email;
        this.name = email.substring(0, email.indexOf("@"));
        console.log(this.name);

      }
    });
  }
  onChangeAmount(amount: number) {
    this.amountChange.emit({ ...this.menu, amount });
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
    console.log('amount item from menu com', amount);
    console.log('menu item from menu com', item);
    for (const x of this.menu) {

      if (item._id === x._id) {
        x.amount = amount;
      }
    }
    console.log('this menu', this.menu);
    this.basketService.updateBasket(this.menu);
    // this.basketService.updateBasket({ ...item, ...amount });
  }


}
