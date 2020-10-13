import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasseOrgaoComponent } from './repasse-orgao.component';

describe('RepasseOrgaoComponent', () => {
  let component: RepasseOrgaoComponent;
  let fixture: ComponentFixture<RepasseOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepasseOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasseOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
