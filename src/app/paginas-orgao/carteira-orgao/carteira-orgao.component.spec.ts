import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraOrgaoComponent } from './carteira-orgao.component';

describe('CarteiraOrgaoComponent', () => {
  let component: CarteiraOrgaoComponent;
  let fixture: ComponentFixture<CarteiraOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteiraOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
