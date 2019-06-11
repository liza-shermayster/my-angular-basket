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
  menuDescription;

  constructor(private basketData: BasketService, private route: ActivatedRoute) {
    this.basketData.getBasketData().subscribe((data) =>
      this.menuDescription = data);
  }

  ngOnInit() {

  }



}
