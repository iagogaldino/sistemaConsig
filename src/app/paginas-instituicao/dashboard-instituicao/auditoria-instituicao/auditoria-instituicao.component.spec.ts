import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaInstituicaoComponent } from './auditoria-instituicao.component';

describe('AuditoriaInstituicaoComponent', () => {
  let component: AuditoriaInstituicaoComponent;
  let fixture: ComponentFixture<AuditoriaInstituicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaInstituicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
