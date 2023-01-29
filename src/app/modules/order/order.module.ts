import {NgModule} from '@angular/core';
import {OrderComponent} from '../../components/order/order.component';
import {OrderItemsComponent} from '../../components/order/order-items/order-items.component';
import {DeliveryCostsComponent} from '../../components/order/delivery-costs/delivery-costs.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';


const ROUTES: Routes = [
	{path: '', component: OrderComponent}
];

@NgModule({
	imports: [SharedModule, RouterModule.forChild(ROUTES)],
	declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent]
})
export class OrderModule {
}
