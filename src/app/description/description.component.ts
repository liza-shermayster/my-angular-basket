import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { MenuService } from '../menu.service';
import { Basket, BasketItem, MenuItem } from '../menu';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  descItem;
  itemData: BasketItem | MenuItem;

  constructor(private serviceData: BasketService) {
    this.descItem = this.serviceData.getBasketData().subscribe(this.onBasketItem);
  }

  onBasketItem = (data: Basket) => {
    console.log(data);
    if (data) {
      this.itemData = data['apple'];
    }
  }
  ngOnInit() {
  }

}
