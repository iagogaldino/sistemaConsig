import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoContratoComponent } from './resumo-contrato.component';

describe('ResumoContratoComponent', () => {
  let component: ResumoContratoComponent;
  let fixture: ComponentFixture<ResumoContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
