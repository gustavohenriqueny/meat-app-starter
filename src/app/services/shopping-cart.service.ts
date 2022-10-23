import {Injectable} from '@angular/core';
import {CartItem} from '../models/cart-item';
import {MenuItem} from '../models/menu-item';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor() {
  }

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  totalItems(): number {
    return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }
}