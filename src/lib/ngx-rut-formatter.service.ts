import { Injectable } from '@angular/core';
import * as rut from '@mlezcano1985/rut-formatter';

@Injectable({
  providedIn: 'root'
})
export class NgxRutFormatterService {

  constructor() { }

  format(str: string): string | null {
    return rut.format(str);
  }

  clean(str: string): string {
    return rut.clean(str);
  }
}
