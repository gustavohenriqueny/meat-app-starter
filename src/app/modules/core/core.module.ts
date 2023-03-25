import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {OrderService} from '../../services/order.service';
import {RestaurantsService} from '../../services/restaurants.service';

@NgModule({
	providers: [ShoppingCartService, OrderService, RestaurantsService]
})
export class CoreModule {
}
