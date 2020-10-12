import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalhesAverbacaoOrgaoComponent } from './datalhes-averbacao-orgao.component';

describe('DatalhesAverbacaoOrgaoComponent', () => {
  let component: DatalhesAverbacaoOrgaoComponent;
  let fixture: ComponentFixture<DatalhesAverbacaoOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalhesAverbacaoOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalhesAverbacaoOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
