import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from '../../components/util/input/input.component';
import {RatingComponent} from '../../components/util/rating/rating.component';
import {RadioComponent} from '../../components/util/radio/radio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [InputComponent, RatingComponent, RadioComponent, FormsModule, ReactiveFormsModule],
	declarations: [InputComponent, RatingComponent, RadioComponent,],
})
export class SharedModule {
}
