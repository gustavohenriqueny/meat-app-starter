import {Component, OnInit} from '@angular/core';
import {RestaurantModel} from '../../models/restaurant.model';
import {RestaurantsService} from '../../services/restaurants.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
                'display' : 'block',
                'width': '250px'
            })),
            transition('* => *', animate('250ms 0s ease-in-out'))
        ])
    ]
})
export class RestaurantsComponent implements OnInit {

    searchBarState = 'hidden';
    restaurants: RestaurantModel[];

    constructor(private restaurantService: RestaurantsService) {
    }

    ngOnInit() {
        this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
    }

    toggleSearch() {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    }

}
