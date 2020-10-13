import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktshareOrgaoComponent } from './marktshare-orgao.component';

describe('MarktshareOrgaoComponent', () => {
  let component: MarktshareOrgaoComponent;
  let fixture: ComponentFixture<MarktshareOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarktshareOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktshareOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
