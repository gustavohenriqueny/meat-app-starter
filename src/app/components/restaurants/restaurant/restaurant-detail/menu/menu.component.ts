import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../../../../services/restaurants.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {MenuItem} from '../../../../../models/menu-item';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
