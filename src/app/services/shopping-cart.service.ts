import {Injectable} from '@angular/core';
import {CartItemModel} from '../models/cart-item.model';
import {MenuItemModel} from '../models/menu-item.model';
import {NotificationService} from './notification.service';

@Injectable()
export class ShoppingCartService {

    items: CartItemModel[] = [];

    constructor(private notificationService: NotificationService) {
    }

    clear() {
        this.items = [];
    }

    addItem(item: MenuItemModel) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItemModel(item));
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`);
    }

    increaseQty(item: CartItemModel) {
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CartItemModel) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItemModel) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
    }

    totalItems(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    }
}
