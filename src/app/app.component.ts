import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits = [
    { title: 'apple', price: 1 },
    { title: 'banana', price: 2 },
    { title: 'mango', price: 5 }
  ];
  basket: string;
  total;

  getDataFun(event) {
    console.log(event);
    this.basket = event.title;
    this.total = event.price;
  }
}
