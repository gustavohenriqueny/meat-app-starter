import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
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
import {NotFoundComponent} from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './security/login/login.component';
import {UserDetailComponent} from './components/header/user-detail/user-detail.component';
import {ApplicationErrorHandler} from './app.error-handler';

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
        NotFoundComponent,
        LoginComponent,
        UserDetailComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule.forRoot(),
        RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        {provide: ErrorHandler, useClass: ApplicationErrorHandler}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
