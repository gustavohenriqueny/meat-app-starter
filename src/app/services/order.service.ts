import {Injectable} from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {CartItemModel} from '../models/cart-item.model';
import {OrderModel} from '../models/order.model';
import {Observable} from 'rxjs';
import {Headers, Http, RequestOptions} from '@angular/http';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService {

	constructor(private cartService: ShoppingCartService, private http: Http) {
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

	itemsValue(): number {
		return this.cartService.totalItems();
	}

	checkOrder(order: OrderModel): Observable<string> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json')
		return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers})).map(response => response.json());
	}

	clear() {
		this.cartService.clear();
	}

}
