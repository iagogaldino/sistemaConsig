import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-contrato',
  templateUrl: './historico-contrato.component.html',
  styleUrls: ['./historico-contrato.component.css'],
})
export class HistoricoContratoComponent implements OnInit {
  displayedColumns: string[] = [
    'contrato',
    'instituicao',
    'dt',
    'valorParcela',
    'prazo',
    'situacao',
  ];
  dataSource: any;
  constructor() {}



ngOnInit(): void {
  this.dataSource = [
    {contrato: '1', instituicao: 'XXX', dt: 'XXX', valorParcela: '1.400,00', prazo: '3', situacao: 'ok'},
    {contrato: '2', instituicao: 'XXX', dt: 'XXX', valorParcela: '1.400,00', prazo: '3', situacao: 'ok'},
    {contrato: '3', instituicao: 'XXX', dt: 'XXX', valorParcela: '1.400,00', prazo: '3', situacao: 'ok'},
  ];
}


}
