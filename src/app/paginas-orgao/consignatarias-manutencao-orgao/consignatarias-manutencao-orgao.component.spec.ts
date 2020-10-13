import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignatariasManutencaoOrgaoComponent } from './consignatarias-manutencao-orgao.component';

describe('ConsignatariasManutencaoOrgaoComponent', () => {
  let component: ConsignatariasManutencaoOrgaoComponent;
  let fixture: ComponentFixture<ConsignatariasManutencaoOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignatariasManutencaoOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignatariasManutencaoOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
