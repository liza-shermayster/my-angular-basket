import { Pipe, PipeTransform } from '@angular/core';
import { BasketItem } from '../menu';

type PipeValue = { key: string, value: BasketItem }
@Pipe({
  name: 'filterBasket'
})
export class FilterBasketPipe implements PipeTransform {

  transform(basketItems: PipeValue[]): PipeValue[] {
    if (basketItems) {
      /**
       * @desc function filter creates new array
       * if item returns true it will be added to new created array
       */
      return basketItems.filter(item => {
        console.log(item);
        // if amount exist or grater than 0
        if (item.value.amount) {
          return true;
        }
        return false;
      });
    }
    // if no basket items return empty array
    return [];


  }

}
