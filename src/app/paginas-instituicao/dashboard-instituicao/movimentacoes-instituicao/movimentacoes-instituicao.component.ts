import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacoes-instituicao',
  templateUrl: './movimentacoes-instituicao.component.html',
  styleUrls: ['./movimentacoes-instituicao.component.css']
})
export class MovimentacoesInstituicaoComponent implements OnInit {
 displayedColumns: string [] = [
    'data_averb',
    'produto',
    'id',
    'cpf',
    'n_contrato',
    'valor',
    'orgao',
  ];
  dataSource: any;
  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {data_averb: '1', produto: '2', id: '3', cpf: '000.400.000-00', n_contrato: '496846', valor: '01265', orgao: 'XXX'}

  ];
}
}
