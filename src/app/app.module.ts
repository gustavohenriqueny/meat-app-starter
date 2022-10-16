import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantComponent} from './components/restaurants/restaurant/restaurant.component';
import {RestaurantsService} from './services/restaurants.service';
import { RestaurantDetailComponent } from './components/restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/restaurants/restaurant/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './components/restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './components/restaurants/restaurant/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurants/restaurant/restaurant-detail/reviews/reviews.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        RestaurantsComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        MenuComponent,
        ShoppingCartComponent,
        MenuItemComponent,
        ReviewsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        RestaurantsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
