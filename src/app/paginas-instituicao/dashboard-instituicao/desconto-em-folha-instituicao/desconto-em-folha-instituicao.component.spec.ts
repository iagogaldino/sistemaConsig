import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontoEmFolhaInstituicaoComponent } from './desconto-em-folha-instituicao.component';

describe('DescontoEmFolhaInstituicaoComponent', () => {
  let component: DescontoEmFolhaInstituicaoComponent;
  let fixture: ComponentFixture<DescontoEmFolhaInstituicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontoEmFolhaInstituicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescontoEmFolhaInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
