import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignatariasOrgaoComponent } from './consignatarias-orgao.component';

describe('ConsignatariasOrgaoComponent', () => {
  let component: ConsignatariasOrgaoComponent;
  let fixture: ComponentFixture<ConsignatariasOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignatariasOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignatariasOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
