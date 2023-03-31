import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemModel} from '../../../models/cart-item.model';

@Component({
    selector: 'mt-order-items',
    templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

    @Input() items: CartItemModel[];

    @Output() increaseQty = new EventEmitter();
    @Output() decreaseQty = new EventEmitter();
    @Output() remove = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    emitIncreaseQty(item: CartItemModel) {
        this.increaseQty.emit(item);
    }

    emitDecreaseQty(item: CartItemModel) {
        this.decreaseQty.emit(item);
    }

    emitRemove(item: CartItemModel) {
        this.remove.emit(item);
    }

}
