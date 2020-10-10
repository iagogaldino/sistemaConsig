import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNovaSenhaComponent } from './cadastro-nova-senha.component';

describe('CadastroNovaSenhaComponent', () => {
  let component: CadastroNovaSenhaComponent;
  let fixture: ComponentFixture<CadastroNovaSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNovaSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNovaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
