export interface MenuItem {
  title: string;
  price: number;
  description?: string;
  img: any;
}

export interface Menu {
  [key: string]: MenuItem;
}


export interface BasketItem extends MenuItem {
  amount: number;
}


export interface Basket {
  [key: string]: BasketItem | MenuItem;
}
