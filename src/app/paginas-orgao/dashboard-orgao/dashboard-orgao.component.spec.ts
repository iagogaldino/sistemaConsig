import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrgaoComponent } from './dashboard-orgao.component';

describe('DashboardOrgaoComponent', () => {
  let component: DashboardOrgaoComponent;
  let fixture: ComponentFixture<DashboardOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
