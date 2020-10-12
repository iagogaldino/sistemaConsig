import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosNovoContratoComponent } from './dados-novo-contrato.component';

describe('DadosNovoContratoComponent', () => {
  let component: DadosNovoContratoComponent;
  let fixture: ComponentFixture<DadosNovoContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosNovoContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosNovoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
