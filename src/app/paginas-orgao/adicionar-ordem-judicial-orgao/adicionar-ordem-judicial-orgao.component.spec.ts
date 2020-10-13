import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarOrdemJudicialOrgaoComponent } from './adicionar-ordem-judicial-orgao.component';

describe('AdicionarOrdemJudicialOrgaoComponent', () => {
  let component: AdicionarOrdemJudicialOrgaoComponent;
  let fixture: ComponentFixture<AdicionarOrdemJudicialOrgaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarOrdemJudicialOrgaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarOrdemJudicialOrgaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
