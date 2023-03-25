import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from '../../components/util/input/input.component';
import {RatingComponent} from '../../components/util/rating/rating.component';
import {RadioComponent} from '../../components/util/radio/radio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {RestaurantsService} from '../../services/restaurants.service';
import {OrderService} from '../../services/order.service';

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [InputComponent, RatingComponent, RadioComponent, FormsModule, ReactiveFormsModule, CommonModule],
	declarations: [InputComponent, RatingComponent, RadioComponent,],
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [ShoppingCartService, RestaurantsService, OrderService]
		}
	}
}
