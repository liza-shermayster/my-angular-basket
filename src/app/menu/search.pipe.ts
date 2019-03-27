import { Pipe, PipeTransform } from '@angular/core';
import { BasketItem } from '../menu';

type PipeValue = { key: string, value: BasketItem }

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: PipeValue[], searchText: string): any {
    console.log('pipe value', value);
    console.log('searchText', searchText)
    if (!searchText) {
      return value;
    }
    if (!value) {
      return [];
    }

    return value.filter(item => {
      console.log(item.value.title.includes(searchText));
      return item.value.title.toLowerCase().includes(searchText.toLowerCase());
    });

  }
}
