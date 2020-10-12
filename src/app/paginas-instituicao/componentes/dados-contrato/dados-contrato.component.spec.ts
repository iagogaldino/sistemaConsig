import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosContratoComponent } from './dados-contrato.component';

describe('DadosContratoComponent', () => {
  let component: DadosContratoComponent;
  let fixture: ComponentFixture<DadosContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
