import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  displayedColumns: string[] = ['data', 'cpf', 'valor', 'detalhes'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {data: '10/05/2023', cpf: '999.999.999-99', valor: 10000},
      {data: '10/05/2023', cpf: '999.999.999-99', valor: 10000},
      {data: '10/05/2023', cpf: '999.999.999-99', valor: 10000},
      {data: '10/05/2023', cpf: '999.999.999-99', valor: 10000},
      {data: '10/05/2023', cpf: '999.999.999-99', valor: 10000},
      {data: '10/05/2023', cpf: '999.999.999-99', valor: 10000},
    ];
  }

}
