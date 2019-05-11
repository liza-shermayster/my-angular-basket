export interface MenuItem {
  _id: string;
  title: string;
  price: number;
  description?: string;
  img: string;
  amount?: number;
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
