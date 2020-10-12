import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoContratoOrgaoComponent } from './detalhamento-contrato-orgao.component';

describe('DetalhamentoContratoOrgaoComponent', () => {
  let component: DetalhamentoContratoOrgaoComponent;
  let fixture: ComponentFixture<DetalhamentoContratoOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhamentoContratoOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhamentoContratoOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
