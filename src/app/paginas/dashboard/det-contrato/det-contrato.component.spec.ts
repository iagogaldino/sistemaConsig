import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetContratoComponent } from './det-contrato.component';

describe('DetContratoComponent', () => {
  let component: DetContratoComponent;
  let fixture: ComponentFixture<DetContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
