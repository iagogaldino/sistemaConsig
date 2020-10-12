import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanciarResumoComponent } from './refinanciar-resumo.component';

describe('RefinanciarResumoComponent', () => {
  let component: RefinanciarResumoComponent;
  let fixture: ComponentFixture<RefinanciarResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinanciarResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanciarResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
