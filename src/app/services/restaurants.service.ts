import {Injectable} from '@angular/core';
import {Restaurant} from '../interfaces/restaurant';
import {Http} from '@angular/http';
import {MEAT_API} from '../app.api';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) {
    }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json());
    }
}
