import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasOrgaoComponent } from './reservas-orgao.component';

describe('ReservasOrgaoComponent', () => {
  let component: ReservasOrgaoComponent;
  let fixture: ComponentFixture<ReservasOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
