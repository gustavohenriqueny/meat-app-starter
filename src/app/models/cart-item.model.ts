import {MenuItemModel} from './menu-item.model';

export class CartItemModel {
    constructor(public menuItem: MenuItemModel, public quantity = 1) {
    }

    value(): number {
        return this.menuItem.price * this.quantity;
    }
}
