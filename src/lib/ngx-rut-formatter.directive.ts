import { Directive,  HostListener, ElementRef, Self } from '@angular/core';
import { NgxRutFormatterService } from './ngx-rut-formatter.service';
import {  Validator, AbstractControl, NgControl } from '@angular/forms';

@Directive({
// tslint:disable-next-line: directive-selector
    selector: '[ngxRutFormatter]',
})
export class NgxRutFormatterDirective {
    constructor(
        private readonly rutService: NgxRutFormatterService,
        private readonly el: ElementRef,
        @Self() private ngControl: NgControl,
    ) { }

    @HostListener('blur') onblur() {
        const value = (this.el.nativeElement as HTMLInputElement).value;
        const clear = this.rutService.clean(value);
        const val = this.rutService.format(clear) || value;
        this.ngControl.control.setValue(val);
        this.validate();
    }

    @HostListener('focus') onfocus() {
        const value = (this.el.nativeElement as HTMLInputElement).value;
        const formatter = this.rutService.clean(value);
        (this.el.nativeElement as HTMLInputElement).value = formatter || value;
    }

    @HostListener('paste', ['$event']) onpaste(e: ClipboardEvent) {
        e.stopPropagation();
        e.preventDefault();
        if (e.clipboardData) {
            // Get pasted data via clipboard API
            const clipboardData = e.clipboardData;
            if (clipboardData.getData) {
                const pastedData = clipboardData.getData('Text');
                this.ngControl.control.setValue(pastedData);
            }
        }
    }

    validate(): void {
        const value = this.ngControl.control.value;
        let err = this.ngControl.control.errors;
        const val = this.rutService.clean(value);
        const formatter = this.rutService.format(val);
        if (!formatter) {
            err = err || {};
            err.rut = true;
        }
        this.ngControl.control.setErrors(err);
    }
}
