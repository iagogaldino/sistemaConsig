import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanciarComponent } from './refinanciar.component';

describe('RefinanciarComponent', () => {
  let component: RefinanciarComponent;
  let fixture: ComponentFixture<RefinanciarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinanciarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
