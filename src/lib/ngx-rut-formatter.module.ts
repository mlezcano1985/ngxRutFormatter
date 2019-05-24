import { NgModule, forwardRef } from '@angular/core';
import { NgxRutFormatterService } from './ngx-rut-formatter.service';
import { NgxRutFormatterDirective } from './ngx-rut-formatter.directive';
import { NG_VALIDATORS } from '@angular/forms';
import { NgxRutFormatterPipe } from './ngx-rut-formatter.pipe';

@NgModule({
  declarations: [
    NgxRutFormatterDirective,
    NgxRutFormatterPipe,
  ],
  imports: [
  ],
  exports: [
    NgxRutFormatterDirective,
    NgxRutFormatterPipe,
  ],
  providers: [
    NgxRutFormatterService,
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgxRutFormatterDirective), multi: true },
  ]
})
export class NgxRutFormatterModule { }
