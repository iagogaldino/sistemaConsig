import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repasse-orgao',
  templateUrl: './repasse-orgao.component.html',
  styleUrls: ['./repasse-orgao.component.css']
})
export class RepasseOrgaoComponent implements OnInit {
  displayedColumns: string [] = [
    'competencia',
    'produto',
    'id',
    'cpf',
    'orgao',
    'valor',
    'n_contrato',
  ];
  dataSource: any;
  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {competencia: 'XXXX', produto: '2', id: '3', cpf: '000.400.000-00', orgao: '496846', valor: '01265', n_contrato: 'XXX'}

  ];
}
}
