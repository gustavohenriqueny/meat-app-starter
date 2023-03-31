import {Injectable} from '@angular/core';
import {RestaurantModel} from '../models/restaurant.model';
import {Http} from '@angular/http';
import {MEAT_API} from '../app.api';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErrorHandler} from '../app.error-handler';
import {MenuItemModel} from '../models/menu-item.model';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) {
    }

    restaurants(): Observable<RestaurantModel[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<RestaurantModel> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
}
