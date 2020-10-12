import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portabilidade',
  templateUrl: './portabilidade.component.html',
  styleUrls: ['./portabilidade.component.css']
})
export class PortabilidadeComponent implements OnInit {

  displayedColumns: string[] = ['data_pedido', 'n_contrato', 'cpf', 'origem_instituicao', 'destino_instituicao', 'comprovante',
  'autorizacao', 'detalhes'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      {data: '10/05/2023', cpf: '999.999.999-99', valor: 10000},
    ];
  }

}
