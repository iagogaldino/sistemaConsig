import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDadosComponent } from './caixa-dados.component';

describe('CaixaDadosComponent', () => {
  let component: CaixaDadosComponent;
  let fixture: ComponentFixture<CaixaDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
