import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemJudicialComponent } from './ordem-judicial.component';

describe('OrdemJudicialComponent', () => {
  let component: OrdemJudicialComponent;
  let fixture: ComponentFixture<OrdemJudicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemJudicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
