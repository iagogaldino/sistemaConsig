import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemJudicialOrgaoComponent } from './ordem-judicial-orgao.component';

describe('OrdemJudicialOrgaoComponent', () => {
  let component: OrdemJudicialOrgaoComponent;
  let fixture: ComponentFixture<OrdemJudicialOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemJudicialOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemJudicialOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
