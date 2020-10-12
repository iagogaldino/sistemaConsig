import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignatariaComponent } from './consignataria.component';

describe('ConsignatariaComponent', () => {
  let component: ConsignatariaComponent;
  let fixture: ComponentFixture<ConsignatariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignatariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignatariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
