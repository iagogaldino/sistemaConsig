import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesInstituicaoComponent } from './movimentacoes-instituicao.component';

describe('MovimentacoesInstituicaoComponent', () => {
  let component: MovimentacoesInstituicaoComponent;
  let fixture: ComponentFixture<MovimentacoesInstituicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacoesInstituicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacoesInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
