import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarContratoComponent } from './cancelar-contrato.component';

describe('CancelarContratoComponent', () => {
  let component: CancelarContratoComponent;
  let fixture: ComponentFixture<CancelarContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelarContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
