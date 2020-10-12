import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverbacaoGestaoComponent } from './averbacao-gestao.component';

describe('AverbacaoGestaoComponent', () => {
  let component: AverbacaoGestaoComponent;
  let fixture: ComponentFixture<AverbacaoGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverbacaoGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverbacaoGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
