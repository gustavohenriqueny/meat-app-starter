import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantDetailComponent} from './components/restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './components/restaurants/restaurant/restaurant-detail/menu/menu.component';
import {ReviewsComponent} from './components/restaurants/restaurant/restaurant-detail/reviews/reviews.component';
import {OrderSummaryComponent} from './components/order/order-summary/order-summary.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './security/login/login.component';
import {LoggedinService} from './services/loggedin.service';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'restaurants/:id',
        component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent},
        ],
    },
    {path: 'restaurants', component: RestaurantsComponent},
    {
        path: 'order', loadChildren: './modules/order/order.module#OrderModule',
        canLoad: [LoggedinService]
    },
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'about', loadChildren: './modules/about/about.module#AboutModule'},
    {path: '**', component: NotFoundComponent},
];
