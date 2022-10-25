import {Injectable} from '@angular/core';
import {CartItemModel} from '../models/cart-item.model';
import {MenuItemModel} from '../models/menu-item.model';

@Injectable()
export class ShoppingCartService {

	items: CartItemModel[] = [];

	constructor() {
	}

	clear() {
		this.items = [];
	}

	addItem(item: MenuItemModel) {
		let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
		if (foundItem) {
			foundItem.quantity = foundItem.quantity + 1;
		} else {
			this.items.push(new CartItemModel(item));
		}
	}

	removeItem(item: CartItemModel) {
		this.items.splice(this.items.indexOf(item), 1);
	}

	totalItems(): number {
		return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
	}
}
