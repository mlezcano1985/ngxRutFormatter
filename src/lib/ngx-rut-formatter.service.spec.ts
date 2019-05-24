import { TestBed } from '@angular/core/testing';

import { NgxRutFormatterService } from './ngx-rut-formatter.service';

describe('NgxRutFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRutFormatterService = TestBed.get(NgxRutFormatterService);
    expect(service).toBeTruthy();
  });
});
