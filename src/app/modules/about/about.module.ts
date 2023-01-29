import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from '../../components/about/about.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
	{path: '', component: AboutComponent}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule, RouterModule.forChild(ROUTES)	
	],
	declarations: [AboutComponent]
})
export class AboutModule {
}
