import {Injectable} from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {CartItemModel} from '../models/cart-item.model';

@Injectable()
export class OrderService {

	constructor(private cartService: ShoppingCartService) {
	}

	cartItems(): CartItemModel[] {
		return this.cartService.items;
	}

	increaseQty(item: CartItemModel) {
		this.cartService.increaseQty(item);
	}

	decreaseQty(item: CartItemModel) {
		this.cartService.decreaseQty(item);
	}

	remove(item: CartItemModel) {
		this.cartService.removeItem(item);
	}

}
