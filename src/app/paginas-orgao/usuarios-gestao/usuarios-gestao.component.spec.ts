import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosGestaoComponent } from './usuarios-gestao.component';

describe('UsuariosGestaoComponent', () => {
  let component: UsuariosGestaoComponent;
  let fixture: ComponentFixture<UsuariosGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
