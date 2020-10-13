import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MargemOrgaoComponent } from './margem-orgao.component';

describe('MargemOrgaoComponent', () => {
  let component: MargemOrgaoComponent;
  let fixture: ComponentFixture<MargemOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MargemOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MargemOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
