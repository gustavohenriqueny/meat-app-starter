import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from '../../components/util/input/input.component';
import {RatingComponent} from '../../components/util/rating/rating.component';
import {RadioComponent} from '../../components/util/radio/radio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {RestaurantsService} from '../../services/restaurants.service';
import {OrderService} from '../../services/order.service';
import {SnackbarComponent} from '../../components/util/messages/snackbar/snackbar.component';
import {NotificationService} from '../../services/notification.service';
import {LoginService} from 'app/services/login.service';
import {LoggedinService} from '../../services/loggedin.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../security/auth.interceptor';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RatingComponent, RadioComponent, FormsModule, ReactiveFormsModule, CommonModule, SnackbarComponent],
    declarations: [InputComponent, RatingComponent, RadioComponent, SnackbarComponent],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ShoppingCartService,
                RestaurantsService,
                OrderService,
                NotificationService,
                LoginService,
                LoggedinService,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        }
    }
}
