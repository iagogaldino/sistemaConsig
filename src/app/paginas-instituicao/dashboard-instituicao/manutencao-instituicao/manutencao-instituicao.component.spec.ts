import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoInstituicaoComponent } from './manutencao-instituicao.component';

describe('ManutencaoInstituicaoComponent', () => {
  let component: ManutencaoInstituicaoComponent;
  let fixture: ComponentFixture<ManutencaoInstituicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoInstituicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
