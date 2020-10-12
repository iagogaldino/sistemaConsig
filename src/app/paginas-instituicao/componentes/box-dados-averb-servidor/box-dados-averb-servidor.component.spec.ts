import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDadosAverbServidorComponent } from './box-dados-averb-servidor.component';

describe('BoxDadosAverbServidorComponent', () => {
  let component: BoxDadosAverbServidorComponent;
  let fixture: ComponentFixture<BoxDadosAverbServidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxDadosAverbServidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDadosAverbServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
