import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { BasketService } from '../basket.service';
import { Order } from '../order';
import { OrderService } from './order.service';

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
        this.email = email;
        this.name = email.substring(0, email.indexOf('@'));
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
    for (const x of this.menu) {

      if (item._id === x._id) {
        x.amount = amount;
      }
    }
    this.basketService.updateBasket(this.menu);
  }
}
