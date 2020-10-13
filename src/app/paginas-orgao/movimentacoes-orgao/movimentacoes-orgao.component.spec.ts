import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesOrgaoComponent } from './movimentacoes-orgao.component';

describe('MovimentacoesOrgaoComponent', () => {
  let component: MovimentacoesOrgaoComponent;
  let fixture: ComponentFixture<MovimentacoesOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacoesOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacoesOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
