import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialOrgaoComponent } from './pagina-inicial-orgao.component';

describe('PaginaInicialOrgaoComponent', () => {
  let component: PaginaInicialOrgaoComponent;
  let fixture: ComponentFixture<PaginaInicialOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaInicialOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInicialOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
