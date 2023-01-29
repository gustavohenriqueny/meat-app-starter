import {Component, OnInit} from '@angular/core';
import {RadioOptionModel} from '../../models/radio-option.model';
import {OrderService} from '../../services/order.service';
import {CartItemModel} from '../../models/cart-item.model';
import {OrderItem, OrderModel} from '../../models/order.model';
import {Router} from '@angular/router';

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

	constructor(private orderService: OrderService, private router: Router) {
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

	checkOrder(order: OrderModel) {
		order.orderItems = this.cartItms().map((item: CartItemModel) => new OrderItem(item.quantity, item.menuItem.id));
		this.orderService.checkOrder(order).subscribe((orderId: OrderModel) => {
			this.router.navigate(['/order-summary']);
			this.orderService.clear();
		});
		console.log(order);
	}

}
