import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCadastradosComponent } from './usuarios-cadastrados.component';

describe('UsuariosCadastradosComponent', () => {
  let component: UsuariosCadastradosComponent;
  let fixture: ComponentFixture<UsuariosCadastradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosCadastradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
