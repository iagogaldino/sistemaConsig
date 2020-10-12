import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInstituicaoComponent } from './dashboard-instituicao.component';

describe('DashboardInstituicaoComponent', () => {
  let component: DashboardInstituicaoComponent;
  let fixture: ComponentFixture<DashboardInstituicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInstituicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
