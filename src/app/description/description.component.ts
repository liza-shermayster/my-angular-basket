import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Basket, BasketItem, MenuItem } from '../menu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  obserBasketData;
  itemKey: string;
  itemData: BasketItem | MenuItem;

  constructor(private serviceData: BasketService, private route: ActivatedRoute) {
    this.obserBasketData = this.serviceData.getBasketData();
  }

  ngOnInit() {
    this.itemKey = this.route.snapshot.params['item'];
    this.obserBasketData.subscribe(this.onBasketItem);
  }

  onBasketItem = (data: Basket) => {
    console.log(data);
    if (data && this.itemKey) {
      this.itemData = data[this.itemKey];
    }
  }

}
