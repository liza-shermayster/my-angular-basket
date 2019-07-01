import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { BasketService } from '../basket.service';
import { AuthService } from '../auth/auth.service';
import { Order } from '../order';
import { OrderService } from './order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  menu;
  total = 0;
  user = false;
  email;
  name;
  creator;
  isPayed = false;
  menu$: Subscription;
  basket$: Subscription;
  @Output() amountChange = new EventEmitter();

  constructor(private basketService: BasketService, private auth: AuthService, private orderService: OrderService) {
    this.menu$ = this.basketService.getBasketData().subscribe((data) => {
      this.menu = data;
    });

    this.basket$ = this.basketService.getTotalPrice().subscribe(total => {
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

  ngOnInit() {
  }

  ngOnDestroy() {
    this.menu$.unsubscribe();
    this.basket$.unsubscribe();
  }

  onChangeAmount(amount: number) {
    this.amountChange.emit({ ...this.menu, amount });
  }


  createOrder() {
    const order = this.getOrderData();
    this.orderService.createOrderOnService(order).subscribe((res) => {
      console.log('order created!', res);
      this.isPayed = true;
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
  }
}
