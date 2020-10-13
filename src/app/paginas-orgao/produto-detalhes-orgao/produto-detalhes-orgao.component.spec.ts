import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalhesOrgaoComponent } from './produto-detalhes-orgao.component';

describe('ProdutoDetalhesOrgaoComponent', () => {
  let component: ProdutoDetalhesOrgaoComponent;
  let fixture: ComponentFixture<ProdutoDetalhesOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDetalhesOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDetalhesOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
