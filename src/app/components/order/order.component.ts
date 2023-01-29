import {Component, OnInit} from '@angular/core';
import {RadioOptionModel} from '../../models/radio-option.model';
import {OrderService} from '../../services/order.service';
import {CartItemModel} from '../../models/cart-item.model';
import {OrderItem, OrderModel} from '../../models/order.model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'mt-order',
	templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	numberPatter = /^[0-9]*$/;
	orderForm: FormGroup;
	delivery: number = 8;

	paymentOptions: RadioOptionModel[] = [
		{label: 'Dinheiro', value: 'MON'},
		{label: 'Cartão de débito', value: 'DEB'},
		{label: 'Cartão refeição', value: 'REF'}
	];

	constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) {
	}

	ngOnInit() {
		this.orderForm = this.formBuilder.group({
			name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
			email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
			emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
			address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
			number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPatter)]),
			optionalAddress: this.formBuilder.control(''),
			paymentOption: this.formBuilder.control('', Validators.required)
		});
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
	}

}
