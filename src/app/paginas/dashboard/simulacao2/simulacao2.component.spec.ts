import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simulacao2Component } from './simulacao2.component';

describe('Simulacao2Component', () => {
  let component: Simulacao2Component;
  let fixture: ComponentFixture<Simulacao2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simulacao2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simulacao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
