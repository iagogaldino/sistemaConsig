import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-por-contrato',
  templateUrl: './pesquisa-por-contrato.component.html',
  styleUrls: ['./pesquisa-por-contrato.component.css']
})
export class PesquisaPorContratoComponent implements OnInit {
  displayedColumns: string[] = [
  'n_contrato',
  'instituicao',
  'valor',
  'valor_pago',
  'sistuacao',
  'detalhes',
];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {data: '10/05/2023', cpf: '999.999.999-99', valor: 10000},
    ];
  }

}
