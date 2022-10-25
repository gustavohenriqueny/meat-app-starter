import {Component, OnInit} from '@angular/core';
import {RestaurantModel} from '../../models/restaurant.model';
import {RestaurantsService} from '../../services/restaurants.service';

@Component({
	selector: 'mt-restaurants',
	templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

	restaurants: RestaurantModel[];

	constructor(private restaurantService: RestaurantsService) {
	}

	ngOnInit() {
		this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
	}

}
