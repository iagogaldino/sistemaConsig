import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialInstComponent } from './pagina-inicial-inst.component';

describe('PaginaInicialInstComponent', () => {
  let component: PaginaInicialInstComponent;
  let fixture: ComponentFixture<PaginaInicialInstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaInicialInstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInicialInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
