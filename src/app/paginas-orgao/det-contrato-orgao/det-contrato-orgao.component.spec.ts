import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetContratoOrgaoComponent } from './det-contrato-orgao.component';

describe('DetContratoOrgaoComponent', () => {
  let component: DetContratoOrgaoComponent;
  let fixture: ComponentFixture<DetContratoOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetContratoOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetContratoOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
