import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarioInstitucionalComponent } from './cadastro-usuario-institucional.component';

describe('CadastroUsuarioInstitucionalComponent', () => {
  let component: CadastroUsuarioInstitucionalComponent;
  let fixture: ComponentFixture<CadastroUsuarioInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUsuarioInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuarioInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
