import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoManutencaoInstituicaoComponent } from './visualizacao-manutencao-instituicao.component';

describe('VisualizacaoManutencaoInstituicaoComponent', () => {
  let component: VisualizacaoManutencaoInstituicaoComponent;
  let fixture: ComponentFixture<VisualizacaoManutencaoInstituicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacaoManutencaoInstituicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacaoManutencaoInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
