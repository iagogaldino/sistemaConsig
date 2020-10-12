import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-det-contrato',
  templateUrl: './det-contrato.component.html',
  styleUrls: ['./det-contrato.component.css']
})
export class DetContratoComponent implements OnInit {
  displayedColumns: string[] = ['n_parcela',
  'competencia',
  'valor',
  'valor_pago',
  'situacao',
];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {n_parcela: '10', competencia: 'xx/xxxx', valor: 10000, valor_pago: 10000, situacao: 'ok'},
      {n_parcela: '10', competencia: 'xx/xxxx', valor: 10000, valor_pago: 10000, situacao: 'ok'},
      {n_parcela: '10', competencia: 'xx/xxxx', valor: 10000, valor_pago: 10000, situacao: 'ok'},
      {n_parcela: '10', competencia: 'xx/xxxx', valor: 10000, valor_pago: 10000, situacao: 'ok'},
      {n_parcela: '10', competencia: 'xx/xxxx', valor: 10000, valor_pago: 10000, situacao: 'ok'},
    ];
  }

}

