import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu';
import { MenuService } from '../menu.service';
import { BasketService } from '../basket.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  panelOpenState = false;
  menu: MenuItem[];
  searchValue = '';
  total;
  addAmount;
  dialogRef;


  constructor(private basketService: BasketService, public dialog: MatDialog) {
    this.basketService.getBasketData().subscribe((data) => {

      this.menu = data;
    });

    this.total = this.basketService.getTotalPrice();
  }

  addItemToBasket(item) {
    this.basketService.updateBasket({ ...item });

    // console.log('amount item from menu com', amount);
    // console.log('menu item from menu com', item);
    // for (const x of this.menu) {
    //   if (item._id === x._id) {
    //     x.amount = amount;
    //   }
    // }
    // console.log('this menu', this.menu);
    // this.basketService.updateBasket(this.menu);
    // this.basketService.updateBasket({ ...item, ...amount });
  }

}
