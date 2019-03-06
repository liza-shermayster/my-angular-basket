import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  menu = {
    apple: { title: 'apple', price: 1 },
    banana: { title: 'banana', price: 2 },
    mango: { title: 'mango', price: 3 },
    avocado: { title: 'avocado', price: 4 },
    blueberries: { title: 'blueberries', price: 5 },
  };
  myBasket = {};

  myFilteredbasket = [];


  addItemToBasket(key: string, amount = 1): any {
    this.myBasket[key] = { ...this.menu[key], amount };
    console.log(this.myBasket);

  }


  // if (this.myBasket.indexOf(item.title) === -1) {
  //   this.myBasket.push(item.title);
  // }
  // console.log(this.myBasket);


  removeItemFromBasket(item) {
    // console.log('remove item', item);
    // this.myBasket = this.myBasket.filter((basketItem) => {
    //   console.log(basketItem);
    //   console.log(item.title);
    //   if (basketItem !== item.title) {
    //     return basketItem;
    //   }
    // });
  }


  //   fruits = [
  //     { title: 'apple', price: 1 },
  //     { title: 'banana', price: 2 },
  //     { title: 'mango', price: 5 }
  //   ];
  //   basket: string;
  //   total = 0;
  //   countBasket = [];
  //   totalPrice = 0;
  //   amount = 0;
  //   myTotalPriceItem = [
  //     { tile: 'apple', price: 1, count: 2 },
  //     { tile: 'banana', price: 3, count: 4 },
  //     { tile: 'mango', price: 5, count: 6 }
  //   ];
  //   test = { title: 'apple', count: '2', price: '3' };

  //   getDataFun(event) {
  //     this.total = event.price;
  //     this.basket = event.title;
  //     this.countBasket.push(event.title);
  //     this.amount = this.amount + 1;
  //     this.totalPrice = this.totalPrice + event.price;
  //   }



}
