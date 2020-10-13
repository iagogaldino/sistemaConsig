import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-judicial-orgao',
  templateUrl: './ordem-judicial-orgao.component.html',
  styleUrls: ['./ordem-judicial-orgao.component.css']
})
export class OrdemJudicialOrgaoComponent implements OnInit {
  dataSource: any;
  displayedColumns = [
    'congnataria',
    'id_funcional',
    'cpf',
    'n_processo',
    'datalhes',
    'reverter'
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {
        consgnataria: 'consgnataria',
        id_funcional: 'consgnataria',
        cpf: 'consgnataria',
        n_processo: 'consgnataria',
      }
    ];
  }

}
