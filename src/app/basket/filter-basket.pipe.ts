import { Pipe, PipeTransform } from '@angular/core';
import { BasketItem } from '../menu';

@Pipe({
  name: 'filterBasket'
})
export class FilterBasketPipe implements PipeTransform {

  transform(basketItems) {
    if (basketItems) {
      /**
       * @desc function filter creates new array
       * if item returns true it will be added to new created array
       */
      return basketItems.filter(item => {
        console.log(item);
        // if amount exist or grater than 0
        if (item.amount) {
          return true;
        }
        return false;
      });
    }
    // if no basket items return empty array
    return [];


  }

}
