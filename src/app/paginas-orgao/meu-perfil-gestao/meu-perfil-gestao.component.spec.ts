import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPerfilGestaoComponent } from './meu-perfil-gestao.component';

describe('MeuPerfilGestaoComponent', () => {
  let component: MeuPerfilGestaoComponent;
  let fixture: ComponentFixture<MeuPerfilGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPerfilGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPerfilGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
