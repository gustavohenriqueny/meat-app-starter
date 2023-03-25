import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {PreloadAllModules, RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantComponent} from './components/restaurants/restaurant/restaurant.component';
import {RestaurantDetailComponent} from './components/restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './components/restaurants/restaurant/restaurant-detail/menu/menu.component';
import {ShoppingCartComponent} from './components/restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.component';
import {MenuItemComponent} from './components/restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.component';
import {ReviewsComponent} from './components/restaurants/restaurant/restaurant-detail/reviews/reviews.component';
import {OrderSummaryComponent} from './components/order/order-summary/order-summary.component';
import {SharedModule} from './modules/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
		OrderSummaryComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		SharedModule.forRoot(),
		RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
	],
	providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
	bootstrap: [AppComponent]
})
export class AppModule {
}
