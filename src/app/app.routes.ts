import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantDetailComponent} from './components/restaurants/restaurant/restaurant-detail/restaurant-detail.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent},
    {path: 'about', component: AboutComponent}
];
