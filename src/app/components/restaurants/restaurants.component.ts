import {Component, OnInit} from '@angular/core';
import {RestaurantModel} from '../../models/restaurant.model';
import {RestaurantsService} from '../../services/restaurants.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import 'rxjs-compat/add/observable/from';

@Component({
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html',
    animations: [
        trigger('toggleSearch', [
            state('hidden', style({
                opacity: 0,
                'width': '0',
                'display': 'none'
            })),
            state('visible', style({
                opacity: 1,
                'display': 'block',
                'width': '250px'
            })),
            transition('* => *', animate('250ms 0s ease-in-out'))
        ])
    ]
})
export class RestaurantsComponent implements OnInit {

    searchBarState = 'hidden';
    restaurants: RestaurantModel[];
    searchForm: FormGroup;
    searchControl: FormControl;

    constructor(private restaurantService: RestaurantsService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
        this.searchControl = this.formBuilder.control('');
        this.searchForm = this.formBuilder.group({
            searchControl: this.searchControl
        })
        this.searchControl.valueChanges
            .pipe(debounceTime(500),
                distinctUntilChanged(),
                switchMap(searchTerm => this.restaurantService.restaurants(searchTerm)
                    .catch(error => Observable.from([]))))
            .subscribe(restaurants => this.restaurants = restaurants);
    }

    toggleSearch() {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    }

}
