import {Injectable} from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {CartItemModel} from '../models/cart-item.model';
import {OrderModel} from '../models/order.model';
import {Observable} from 'rxjs';
import {MEAT_API} from '../app.api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
                private http: HttpClient,
                private loginService: LoginService) {
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
        let headers = new HttpHeaders();
        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        }
        return this.http.post<OrderModel>(`${MEAT_API}/orders`, order, {headers: headers});
    }

    clear() {
        this.cartService.clear();
    }

}
