import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item;
  @Output() amountChange = new EventEmitter();
  showDetails = false;

  constructor() { }

  ngOnInit() {
  }
  onChangeAmount(amount: number) {
    this.amountChange.emit({ ...this.item, amount });
  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
    console.log(this.showDetails);
  }


}
