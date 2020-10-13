import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carteira-orgao',
  templateUrl: './carteira-orgao.component.html',
  styleUrls: ['./carteira-orgao.component.css']
})
export class CarteiraOrgaoComponent implements OnInit {

  displayedColumns: string [] = [
    'consignataria',
    'qnt_contratos_ativos',
    'valor_medio_parcela',
    'prazo_medio',
    'valor_total_carteira',
  ];
  dataSource: any;
  constructor() { }

  ngOnInit(): void {

    this.dataSource = [
      {consignataria: 'Bradesco',
       qnt_contratos_ativos: '2', valor_medio_parcela: 'R$300,00', prazo_medio: '2', valor_total_carteira: 'R$100'}

  ];
}
}
