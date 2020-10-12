import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspenderContratoComponent } from './suspender-contrato.component';

describe('SuspenderContratoComponent', () => {
  let component: SuspenderContratoComponent;
  let fixture: ComponentFixture<SuspenderContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspenderContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspenderContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
