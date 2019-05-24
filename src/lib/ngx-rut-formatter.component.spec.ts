import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRutFormatterComponent } from './ngx-rut-formatter.component';

describe('NgxRutFormatterComponent', () => {
  let component: NgxRutFormatterComponent;
  let fixture: ComponentFixture<NgxRutFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRutFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRutFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
