import {Component, OnInit} from '@angular/core';
import {RadioOptionModel} from '../../models/radio-option.model';
import {OrderService} from '../../services/order.service';
import {CartItemModel} from '../../models/cart-item.model';

@Component({
	selector: 'mt-order',
	templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	delivery: number = 8;

	paymentOptions: RadioOptionModel[] = [
		{label: 'Dinheiro', value: 'MON'},
		{label: 'Cartão de débito', value: 'DEB'},
		{label: 'Cartão refeição', value: 'REF'}
	];

	constructor(private orderService: OrderService) {
	}

	ngOnInit() {
	}

	itemsValue(): number {
		return this.orderService.itemsValue();
	}

	cartItms(): CartItemModel[] {
		return this.orderService.cartItems();
	}

	increaseQty(item: CartItemModel) {
		this.orderService.increaseQty(item);
	}

	decreaseQty(item: CartItemModel) {
		this.orderService.decreaseQty(item);
	}

	remove(item: CartItemModel) {
		this.orderService.remove(item);
	}

}
