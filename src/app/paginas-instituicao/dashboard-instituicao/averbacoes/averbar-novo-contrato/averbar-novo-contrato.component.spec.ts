import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverbarNovoContratoComponent } from './averbar-novo-contrato.component';

describe('AverbarNovoContratoComponent', () => {
  let component: AverbarNovoContratoComponent;
  let fixture: ComponentFixture<AverbarNovoContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverbarNovoContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverbarNovoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
