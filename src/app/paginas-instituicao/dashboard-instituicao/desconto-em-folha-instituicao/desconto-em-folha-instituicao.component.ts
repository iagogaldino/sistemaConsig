import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desconto-em-folha-instituicao',
  templateUrl: './desconto-em-folha-instituicao.component.html',
  styleUrls: ['./desconto-em-folha-instituicao.component.css']
})
export class DescontoEmFolhaInstituicaoComponent implements OnInit {

  displayedColumns: string[] = [
    'compet',
    'produto',
    'id',
    'cpf',
    'orgao',
    'valor',
    'situacao',
  ];
  dataSource: any;
  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {compet: '1', produto: '2', id: '3', cpf: '7', orgao: '4', valor: '5', situacao: ' 6'}

  ];

  }

}
