import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOrgaoComponent } from './perfil-orgao.component';

describe('PerfilOrgaoComponent', () => {
  let component: PerfilOrgaoComponent;
  let fixture: ComponentFixture<PerfilOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
