import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {RadioOptionModel} from '../../../models/radio-option.model';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'mt-radio',
    templateUrl: './radio.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

    @Input() options: RadioOptionModel[];

    value: any;

    onChange: any;

    constructor() {
    }

    ngOnInit() {
    }

    setValue(value: any) {
        this.value = value;
        this.onChange(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {
    }

    writeValue(object: any): void {
        this.value = object;
    }

}
