import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoInstituicaoNovoPerfilComponent } from './manutencao-instituicao-novo-perfil.component';

describe('ManutencaoInstituicaoNovoPerfilComponent', () => {
  let component: ManutencaoInstituicaoNovoPerfilComponent;
  let fixture: ComponentFixture<ManutencaoInstituicaoNovoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoInstituicaoNovoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoInstituicaoNovoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
