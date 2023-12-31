import {Injectable} from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {CartItemModel} from '../models/cart-item.model';
import {OrderModel} from '../models/order.model';
import {Observable} from 'rxjs';
import {MEAT_API} from '../app.api';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
                private http: HttpClient) {
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

    checkOrder(order: OrderModel): Observable<OrderModel> {
        return this.http.post<OrderModel>(`${MEAT_API}/orders`, order)
            .pipe(tap(order => order.id));
    }

    clear() {
        this.cartService.clear();
    }

}
