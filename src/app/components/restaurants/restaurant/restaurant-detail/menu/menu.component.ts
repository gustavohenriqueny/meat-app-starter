import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../../../../services/restaurants.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {MenuItemModel} from '../../../../../models/menu-item.model';

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    menu: Observable<MenuItemModel[]>

    constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.menu = this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
    }

    addMenuItem(item: MenuItemModel) {
        console.log(item);
    }

}
