import { Pipe, PipeTransform } from '@angular/core';
import { NgxRutFormatterService } from './ngx-rut-formatter.service';

@Pipe({
    name: 'ngxRutFormatter'
})

export class NgxRutFormatterPipe implements PipeTransform {
    constructor(
        private readonly rutService: NgxRutFormatterService
    ) {

    }
    transform(value: string, ...args: any[]): any {
        const cleanVal = this.rutService.clean(value);
        const val = this.rutService.format(cleanVal);
        return val || '';
    }
}
