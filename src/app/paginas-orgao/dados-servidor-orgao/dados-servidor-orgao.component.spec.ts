import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosServidorOrgaoComponent } from './dados-servidor-orgao.component';

describe('DadosServidorOrgaoComponent', () => {
  let component: DadosServidorOrgaoComponent;
  let fixture: ComponentFixture<DadosServidorOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosServidorOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosServidorOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
