import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalizarOrdemJudOrgaoComponent } from './digitalizar-ordem-jud-orgao.component';

describe('DigitalizarOrdemJudOrgaoComponent', () => {
  let component: DigitalizarOrdemJudOrgaoComponent;
  let fixture: ComponentFixture<DigitalizarOrdemJudOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalizarOrdemJudOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalizarOrdemJudOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
