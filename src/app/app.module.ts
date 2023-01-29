import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantComponent} from './components/restaurants/restaurant/restaurant.component';
import {RestaurantsService} from './services/restaurants.service';
import {RestaurantDetailComponent} from './components/restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './components/restaurants/restaurant/restaurant-detail/menu/menu.component';
import {ShoppingCartComponent} from './components/restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.component';
import {MenuItemComponent} from './components/restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.component';
import {ReviewsComponent} from './components/restaurants/restaurant/restaurant-detail/reviews/reviews.component';
import {ShoppingCartService} from './services/shopping-cart.service';
import {OrderComponent} from './components/order/order.component';
import {OrderItemsComponent} from './components/order/order-items/order-items.component';
import {OrderService} from './services/order.service';
import {DeliveryCostsComponent} from './components/order/delivery-costs/delivery-costs.component';
import {OrderSummaryComponent} from './components/order/order-summary/order-summary.component';
import {SharedModule} from './modules/shared/shared.module';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		RestaurantsComponent,
		RestaurantComponent,
		RestaurantDetailComponent,
		MenuComponent,
		ShoppingCartComponent,
		MenuItemComponent,
		ReviewsComponent,
		OrderComponent,
		OrderItemsComponent,
		DeliveryCostsComponent,
		OrderSummaryComponent,
	],
	imports: [
		BrowserModule,
		HttpModule,
		SharedModule,
		RouterModule.forRoot(ROUTES)
	],
	providers: [
		RestaurantsService,
		ShoppingCartService,
		OrderService,
		{provide: LOCALE_ID, useValue: 'pt-BR'}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
