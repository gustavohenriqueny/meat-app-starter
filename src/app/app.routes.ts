import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantDetailComponent} from './components/restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './components/restaurants/restaurant/restaurant-detail/menu/menu.component';
import {ReviewsComponent} from './components/restaurants/restaurant/restaurant-detail/reviews/reviews.component';
import {OrderComponent} from './components/order/order.component';
import {OrderSummaryComponent} from './components/order/order-summary/order-summary.component';

export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'restaurants', component: RestaurantsComponent},
	{
		path: 'restaurants/:id', component: RestaurantDetailComponent,
		children: [
			{path: '', redirectTo: 'menu', pathMatch: 'full'},
			{path: 'menu', component: MenuComponent},
			{path: 'reviews', component: ReviewsComponent}
		]
	},
	{path: 'order', component: OrderComponent},
	{path: 'order-summary', component: OrderSummaryComponent},
	{path: 'about', component: AboutComponent}
];
