import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPerfilConsigComponent } from './meu-perfil-consig.component';

describe('MeuPerfilConsigComponent', () => {
  let component: MeuPerfilConsigComponent;
  let fixture: ComponentFixture<MeuPerfilConsigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPerfilConsigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPerfilConsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
