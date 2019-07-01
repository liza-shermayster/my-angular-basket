import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from '../menu';
import { BasketService } from '../basket.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  menu: MenuItem[];
  searchValue = '';
  total;
  basket$: Subscription;

  constructor(private basketService: BasketService, public dialog: MatDialog) {
    this.basket$ = this.basketService.getBasketData().subscribe((data) => {

      this.menu = data;
    });

    this.total = this.basketService.getTotalPrice();
  }
  ngOnInit() {
  }

  addItemToBasket(item) {
    this.basketService.updateBasket({ ...item });
  }

  ngOnDestroy() {
    this.basket$.unsubscribe();
  }

}
