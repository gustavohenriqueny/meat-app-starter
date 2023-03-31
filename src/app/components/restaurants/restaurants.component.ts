import {Component, OnInit} from '@angular/core';
import {RestaurantModel} from '../../models/restaurant.model';
import {RestaurantsService} from '../../services/restaurants.service';
import {state, style, trigger} from '@angular/animations';

@Component({
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html',
    animations: [
        trigger('toggleSearch', [
            state('hidden', style({
                opacity: 0, 
                "max-height": "0px"
            })),
            state('visible', style({})),
        ])
    ]
})
export class RestaurantsComponent implements OnInit {

    restaurants: RestaurantModel[];

    constructor(private restaurantService: RestaurantsService) {
    }

    ngOnInit() {
        this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
    }

}
