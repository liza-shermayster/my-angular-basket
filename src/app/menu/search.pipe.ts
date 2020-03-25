import { Pipe, PipeTransform } from '@angular/core';
import { BasketItem } from '../menu';

type PipeValue = { key: string, value: BasketItem };

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: PipeValue[], searchText: string): any {
    if (!searchText) {
      return value;
    }
    if (!value) {
      return [];
    }

    return value.filter(item => {
      return item.value.title.toLowerCase().includes(searchText.toLowerCase());
    });

  }
}
