import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoNovoCadastroOrgaoComponent } from './produto-novo-cadastro-orgao.component';

describe('ProdutoNovoCadastroOrgaoComponent', () => {
  let component: ProdutoNovoCadastroOrgaoComponent;
  let fixture: ComponentFixture<ProdutoNovoCadastroOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoNovoCadastroOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoNovoCadastroOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
