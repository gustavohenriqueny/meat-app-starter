import {Component, Input, OnInit} from '@angular/core';
import {RestaurantModel} from '../../../models/restaurant.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'mt-restaurant',
    templateUrl: './restaurant.component.html',
    animations: [
        trigger('restauranteAppeared', [
            state('ready', style({opacity: 1})),
            transition('void => ready', [
                style({opacity: 0, transform: 'translate(-30px, -10px)'}),
                animate('300ms 0s ease-in-out')
            ])
        ])
    ]
})
export class RestaurantComponent implements OnInit {

    restauranteState = 'ready';
    @Input() restaurant: RestaurantModel;

    constructor() {
    }

    ngOnInit() {
    }

}
