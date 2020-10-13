import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-ordem-judicial-orgao',
  templateUrl: './adicionar-ordem-judicial-orgao.component.html',
  styleUrls: ['./adicionar-ordem-judicial-orgao.component.css']
})
export class AdicionarOrdemJudicialOrgaoComponent implements OnInit {

  dataSource: any;
  displayedColumns = [
    'nome',
    'id_funcional',
    'cpf',
    'adequar',
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {
        nome: 'Nome Pessoa Teste',
        cpf: '999.999.999-99',
        id_funcional: '999999999',
      }
    ];
  }

}
