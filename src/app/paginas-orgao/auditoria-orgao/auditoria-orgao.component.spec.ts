import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaOrgaoComponent } from './auditoria-orgao.component';

describe('AuditoriaOrgaoComponent', () => {
  let component: AuditoriaOrgaoComponent;
  let fixture: ComponentFixture<AuditoriaOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
