import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaPorContratoComponent } from './pesquisa-por-contrato.component';

describe('PesquisaPorContratoComponent', () => {
  let component: PesquisaPorContratoComponent;
  let fixture: ComponentFixture<PesquisaPorContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaPorContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaPorContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
