import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroConssignatariaOrgaoComponent } from './cadastro-conssignataria-orgao.component';

describe('CadastroConssignatariaOrgaoComponent', () => {
  let component: CadastroConssignatariaOrgaoComponent;
  let fixture: ComponentFixture<CadastroConssignatariaOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroConssignatariaOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroConssignatariaOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
