import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetalhamentoComponent } from './box-detalhamento.component';

describe('BoxDetalhamentoComponent', () => {
  let component: BoxDetalhamentoComponent;
  let fixture: ComponentFixture<BoxDetalhamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxDetalhamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDetalhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
