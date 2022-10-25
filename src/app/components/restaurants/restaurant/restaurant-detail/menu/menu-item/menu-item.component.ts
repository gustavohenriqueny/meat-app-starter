import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItemModel} from '../../../../../../models/menu-item.model';

@Component({
	selector: 'mt-menu-item',
	templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

	@Input() menuItem: MenuItemModel;

	@Output() add = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}

	emitAddEvent() {
		this.add.emit(this.menuItem);
	}

}
