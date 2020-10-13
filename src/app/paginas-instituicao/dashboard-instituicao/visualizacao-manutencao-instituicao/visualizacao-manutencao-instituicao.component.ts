import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizacao-manutencao-instituicao',
  templateUrl: './visualizacao-manutencao-instituicao.component.html',
  styleUrls: ['./visualizacao-manutencao-instituicao.component.css'],
})
export class VisualizacaoManutencaoInstituicaoComponent implements OnInit {
  displayedColumns: String[] = [
    'funcao',
    'acessar',
    'inserir',
    'alterar',
    'excluir',
  ];
  dataSource: any;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = [
      {funcao: 'funcao A'},
      {funcao: 'funcao B'},
      {funcao: 'funcao C'},
      {funcao: 'funcao D'},
  ];
  }
}
